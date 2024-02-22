const express = require('express');
const fs = require('fs');
const geoip = require('geoip-lite');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());
// Use the cors middleware
app.use(cors());

// Enable trust proxy
app.set('trust proxy', true);

// Define endpoint to retrieve recorded visitor data
app.get('/record-visitor', (req, res) => {
    // Read the contents of the visitor_data.json file
    fs.readFile('visitor_data.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let visitorData;
        try {
            // Attempt to parse the JSON data
            visitorData = JSON.parse(data);
        } catch (parseError) {
            // Handle JSON parsing error
            console.error('Error parsing JSON data:', parseError);
            res.status(500).send('Error parsing JSON data');
            return;
        }

        // Check if the parsed data is an array
        if (!Array.isArray(visitorData)) {
            visitorData = []; // If not, initialize as an empty array
        }

        res.json(visitorData); // Send the recorded visitor data as a JSON response
    });
});

// Define endpoint to receive visitor data
app.post('/record-visitor', (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const timestamp = formatTimestamp(new Date()); // Generate formatted timestamp
    const location = geoip.lookup(ipAddress); // Get location based on IP address

    // Read the contents of the visitor_data.json file
    fs.readFile('visitor_data.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let visitorData;
        try {
            // Attempt to parse the JSON data
            visitorData = JSON.parse(data);
        } catch (parseError) {
            // Handle JSON parsing error
            console.error('Error parsing JSON data:', parseError);
            res.status(500).send('Error parsing JSON data');
            return;
        }

        // Ensure visitorData is an array
        if (!Array.isArray(visitorData)) {
            visitorData = [];
        }

        // Push new visitor data to the array
        visitorData.push({ ipAddress, timestamp, location });

        // Write the updated visitor data back to the file
        fs.writeFile('visitor_data.json', JSON.stringify(visitorData), (writeError) => {
            if (writeError) {
                console.error('Error writing file:', writeError);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log('Visitor data recorded successfully.');
            res.status(200).send('Visitor data recorded successfully.');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function formatTimestamp(timestamp) {
    const date = new Date(timestamp); // Convert the timestamp to a Date object
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = date.getDate().toString().padStart(2, '0');
    let hours = date.getHours(); // Get hours in 24-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    return `${year}-${month}-${day} ${hours}:${minutes} ${period}`;
}
