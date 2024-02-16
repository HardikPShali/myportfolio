import React, { useState, useEffect } from 'react';

const Skills = () => {
    const skillsData = [
        { id: 1, name: 'ReactJs', percent: 90, image: 'assets/img/skill/reactjs.svg' },
        { id: 2, name: 'NextJs', percent: 85, image: 'assets/img/skill/nextjs.svg' },
        { id: 3, name: 'Tailwind', percent: 90, image: 'assets/img/skill/tailwind.svg' },
        { id: 4, name: 'HTML5', percent: 95, image: 'assets/img/skill/html.svg' },
        { id: 5, name: 'CSS3', percent: 95, image: 'assets/img/skill/css.svg' },
        { id: 6, name: 'JavaScript', percent: 75, image: 'assets/img/skill/js.svg' },
        { id: 7, name: 'Bootstrap 5', percent: 90, image: 'assets/img/skill/bootstrap.jpg' },
        { id: 8, name: 'SQL', percent: 85, image: 'assets/img/skill/sql.png' },
        { id: 9, name: 'DotNet', percent: 90, image: 'assets/img/skill/dotnet.svg' },
        { id: 10, name: 'Python', percent: 95, image: 'assets/img/skill/python.png' },
        { id: 11, name: 'Git', percent: 95, image: 'assets/img/skill/merge.png' },
        { id: 12, name: 'Jira', percent: 75, image: 'assets/img/skill/jira.png' },
        { id: 13, name: 'REST API', percent: 75, image: 'assets/img/skill/api.png' },
        { id: 14, name: 'Typescript', percent: 75, image: 'assets/img/skill/typescript.png' },
        { id: 15, name: 'Material UI', percent: 75, image: 'assets/img/skill/mui.png' },
        { id: 16, name: 'Redux', percent: 75, image: 'assets/img/skill/redux.png' },
        { id: 17, name: 'NPM', percent: 75, image: 'assets/img/skill/npm.png' },
        { id: 18, name: 'Java', percent: 75, image: 'assets/img/skill/java.png' },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [displayedSkills, setDisplayedSkills] = useState(skillsData.slice(startIndex, startIndex + 3));

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prevIndex => (prevIndex + 3) % skillsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSkills = () => {
        setStartIndex(prevIndex => (prevIndex + 3) % skillsData.length);
    };

    const prevSkills = () => {
        setStartIndex(prevIndex => (prevIndex === 0 ? skillsData.length - 3 : prevIndex - 3));
    };

    useEffect(() => {
        setDisplayedSkills(skillsData.slice(startIndex, startIndex + 3));
    }, [startIndex]);

    // This useEffect ensures that the progress circles are updated whenever the displayed skills change
    useEffect(() => {
        // Code to initialize or update the progress circles
        // This code should be based on your existing implementation for progress circles
        // For example:
        const progressCircles = document.querySelectorAll('.progressCircle');
        progressCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            // Code to set the progress circle based on the percent
        });
    }, [displayedSkills]);

    return (
        <div data-scroll-index="3" id="skill"
            class="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-graduation-cap text-theme"></i>
                    SKILLS
                </div>
                <div class="mb-8 mt-7 md:my-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        My <span class="font-semibold text-theme">Advantages</span>
                    </h2>
                    <p class="max-w-xl mt-4 md:mt-6 subtitle">
                        I specialize in creating engaging and responsive user interfaces, utilizing a variety of technologies to bring web applications to life.
                    </p>
                </div>

                <div className="skills-slider xl:mt-16">
                    <div className="flex justify-center space-x-5" style={{ justifyContent: 'space-around' }}>
                        {displayedSkills.map(skill => (
                            <div key={skill.id} className="space-y-5 text-center">
                                <div className="text-center icon" style={{ width: '50px' }}>
                                    <img src={skill.image} className="dark:grayscale" alt={skill.name} />
                                </div>
                                {/* <div className="progressCircle">
                                    <div className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40" data-percent={skill.percent}>
                                        <div className="absolute inset-0 text-2xl font-semibold text-black dark:text-white label flex-center">
                                            {skill.percent}%
                                        </div>
                                    </div>
                                </div> */}
                                <div className="text-black dark:text-white name">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                    <div
                        class="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 md:absolute md:top-16 lg:top-20 md:right-8 lg:right-13">
                        <button className="transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme" aria-label="Previous" onClick={prevSkills}>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18 5.08006C18 4.77812 17.7121 4.5334 17.3571 4.5334L2.19486 4.5334L6.07553 0.933214C6.32659 0.719715 6.32659 0.373628 6.07553 0.160126C5.82448 -0.0533767 5.41745 -0.0533766 5.1664 0.160126L0.188289 4.69352C-0.0627618 4.90702 -0.0627618 5.2531 0.188289 5.4666L5.33115 9.83986C5.5822 10.0534 5.98923 10.0534 6.24028 9.83986C6.49134 9.62637 6.49134 9.28028 6.24028 9.06678L2.19486 5.62672L17.3571 5.62671C17.7121 5.62671 18 5.38199 18 5.08006Z"
                                    class="fill-[#A0A0A0] group-hover:fill-white" />
                            </svg>
                        </button>
                        <div class="text-sm font-light text-center text-black dark:text-white counter w-7"></div>
                        <button className="transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme" aria-label="Next" onClick={nextSkills}>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.44113e-07 4.91994C4.17717e-07 5.22187 0.287871 5.4666 0.642857 5.4666L15.8051 5.4666L11.9245 9.06678C11.6734 9.28028 11.6734 9.62637 11.9245 9.83987C12.1755 10.0534 12.5826 10.0534 12.8336 9.83987L17.8117 5.30648C18.0628 5.09298 18.0628 4.7469 17.8117 4.5334L12.6688 0.160134C12.4178 -0.0533766 12.0108 -0.0533766 11.7597 0.160134C11.5087 0.373633 11.5087 0.719718 11.7597 0.933218L15.8051 4.37328L0.642857 4.37328C0.287872 4.37328 4.70509e-07 4.61801 4.44113e-07 4.91994Z"
                                    class="fill-[#A0A0A0] group-hover:fill-white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
