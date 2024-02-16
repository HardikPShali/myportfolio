import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleModalShow = (project) => {
        setCurrentProject(project);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleItemClick = (project) => {
        handleModalShow(project);
    };

    const projects = [
        {
            title: 'HealthierU',
            subtitle: 'Health Care Product...',
            description: `
                <u>User Interface Design:</u><br />
                The goal was to create a responsive and visually appealing user interface that would provide a seamless experience to the end users. I utilized Material-UI components and CSS styling to create a consistent look and feel across the application.<br /><br />
                <u>State Management and Interactivity:</u><br />
                Additionally, I used ReactJS to create reusable components and implemented state management using hooks to enhance the user experience. API integration was crucial to the project's success.<br /><br />
                <u>Chat and Video Call Integration:</u><br />
                I also leveraged Agora SDK to implement chat and video call functionality to make the application more interactive.<br /><br />
                <u>Collaboration and Project Management:</u><br />
                Collaboration was vital, and I utilized Git and Jira to manage the project and communicate with my team members effectively. By prioritizing tasks and coordinating efficiently, we were able to deliver excellent results to the client.<br /><br />
                <u>Project Link:</u><br />
                You can check out the project at <a href="https://healthieru.ae/" target='_blank'>healthieru.ae</a>
            `,
            image: 'logo_white_wrong.png',
            link: 'https://healthieru.ae/'
        },
        {
            title: 'FutureGrail',
            subtitle: 'NFT Product...',
            description: ` <u>CoinFactory Overview:</u><br />
            CoinFactory is a battle-tested, self-hosted, and ultra-secure ICO platform that has successfully hosted more than ten ICOs. It boasts features such as referral programs, bounty programs, logging reporting, and end-to-end customization options to give your ICO platform a unique look.<br /><br />

            <u>Technology Stack:</u><br />
            Throughout the development process, I utilized NextJS for server-side rendering and Redux for state management. Styled Components were used to create a visually appealing and consistent user interface. API integration was also crucial to make the platform dynamic.<br /><br />

            <u>Collaboration and Project Management:</u><br />
            Collaboration was key during the project, and Git and Jira were used to manage and track progress. I prioritized tasks based on importance and worked with developers to identify and resolve software bugs. Additionally, I integrated third-party tools and components into the application and coordinated efficient large-scale software deployments.<br /><br />

            <u>Project Outcome:</u><br />
            The end result is a robust, scalable, modular, and API-centric infrastructure that delivers excellent results for our client, FutureGrail in Singapore. To keep the client updated, I delivered project reports and milestone updates to the supervisor.<br /><br />

            <u>Project Link:</u><br />
            You can check out the project at <a href="https://www.futuregrail.com/" target='_blank'>futuregrail.com`,
            image: 'futuregrail.png',
            link: 'https://www.futuregrail.com/'
        },
        {
            title: 'InsuranceHub',
            subtitle: 'Insurance Product...',
            description: `  <u>Project Modules:</u><br />
            The website comprises two main modules, namely Admin and Customer. The Admin module enables the management of policies and payment processes. Additionally, the Admin module can be utilized as an intermediary software by agents to provide policies to customers. The Customer module allows customers to purchase policies and make payments as per their chosen policy.<br /><br />

            <u>Database Management:</u><br />
            All user information files are stored in a centralized database that is managed by the system. The convenience and speed of purchasing insurance online are unparalleled, allowing customers to buy policies from anywhere in the world at any time.<br /><br />

            <u>Profile Management:</u><br />
            This system offers profile management for all policyholders, along with an interface that provides customers with easy access to their policy details. Payment processes are similar to e-commerce transactions, and customers can easily pay their policies online. This hassle-free process is completed in minimal time, reducing overall costs.<br /><br />

            <u>Eliminating Commissions:</u><br />
            Directly buying from the insurance company eliminates the agent's commission, and the paperless process saves costs. The system offers customers information about new and existing policies online.<br /><br />

            <u>Development Process:</u><br />
            Tasks were prioritized and completed based on their level of importance, with collaboration between the team and developers to identify and resolve software bugs. Technologies used include C#.NET, HTML, CSS, JavaScript, and SQL.`,
            image: 'insurancehub.png'
        },
        {
            title: 'CareCare',
            subtitle: 'Vehicle Service Product...',
            description: ` <u>Project Overview:</u><br />
            I developed a Car Service Management system called CarCare that provides customers with low-cost four-wheel vehicle services. The system allows customers to access a range of service centers without needing to leave their homes.<br /><br />

            <u>Features:</u><br />
            CarCare enables various service center owners to register their centers, and customers can choose from a variety of service centers based on their requirements. To enhance the customer experience, an Online Payment module has been implemented, making the payment process quick and secure.<br /><br />

            <u>Development Process:</u><br />
            Throughout the development process, I prioritized tasks to ensure that the most critical issues were addressed first. I worked with developers to identify and remove software bugs and analyzed the source code to identify functionality issues. To create an intuitive and visually appealing user interface, I utilized CSS, JS, and BOOTSTRAP 4.<br /><br />

            <u>Technologies Used:</u><br />
            The project was developed using Sublime Text 3 as the development tool, Core PHP as the technology, and MYSQL Server as the backend. The end result is a user-friendly and efficient system that provides customers with a range of affordable and convenient car service options.`,
            image: 'carcare.png'
        }
    ]
    return (
        <div data-scroll-index="5" id="portfolio"
            class="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-tasks-alt text-theme"></i>
                    PORTFOLIO
                </div>
                <div class="mt-5 mb-8 md:my-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        Complete <span class="font-semibold text-theme">Projects</span>
                    </h2>
                    <p class="max-w-xl mt-4 md:mt-6 subtitle">
                        Look At My Portfolio And Give Me Your Feedback
                    </p>
                </div>

                <div class="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
                    {projects.map((project, index) => (
                        <div key={index} class="relative item md:col-span-2 z-1 group">
                            <div
                                onClick={() => handleItemClick(project)}
                                style={{ cursor: 'pointer' }}
                                class='flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack'>
                                <div class="img-wrapper">
                                    <img src={`assets/img/portfolio/${project?.image}`}
                                        class="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                                        alt="portfolio"
                                    />
                                    <div
                                        class="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100">
                                    </div>
                                </div>
                                <div
                                    class="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                                    {project?.title} <br />
                                    <span>
                                        {project?.subtitle}
                                    </span>
                                </div>
                            </div>
                            {/* <ul
                                class="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                                <li>
                                    <a href="#"
                                        class="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme">
                                        Branding
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    ))}
                </div>
                {/* <div class="mt-10 text-center more-blogs md:mt-13">
                    <a href="#"
                        class="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover">
                        More Projects
                    </a>
                </div> */} {/* Modal */}
                {showModal && (
                    <ProjectModal showModal={showModal} handleModalClose={handleModalClose} projectDetails={currentProject} />
                )}
            </div>
        </div>
    )
}

export default Portfolio
