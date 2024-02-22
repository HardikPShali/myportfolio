import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [lastCommitDate, setLastCommitDate] = useState('');

    useEffect(() => {
        const fetchLastCommitDate = async () => {
            try {
                const accessToken = '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';
                const response = await fetch('https://api.github.com/repos/HardikPShali/myportfolio/commits?per_page=1', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                const data = await response.json();

                if (data && data.length > 0) {
                    const commitDate = new Date(data[0].commit.author.date);
                    const formattedDate = commitDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    });
                    setLastCommitDate(formattedDate);
                }
            } catch (error) {
                console.error('Error fetching last commit date:', error);
            }
        };


        fetchLastCommitDate();
    }, []);;
    return (
        <footer class="py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem">
            <p class="">
                Last Updated:
                <a href="#" class="transition-colors"> [{lastCommitDate}]</a>
            </p>
        </footer>
    )
}

export default Footer
