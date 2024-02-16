import React from 'react'

const resume = () => {
    return (
        <div data-scroll-index="4" id="resume"
            class="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-folder-open text-theme"></i>
                    RESUME
                </div>
                <div class="mb-8 mt-7 md:my-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        Work <span class="font-semibold text-theme">Experience</span>
                    </h2>
                    <p class="max-w-xl mt-4 md:mt-6 subtitle">
                        Hey there, curious minds! 👋 I'm Hardik, a coding virtuoso and accidental stand-up philosopher. Imagine combining the logic of coding with the humor of a sitcom—that's pretty much me in a nutshell. Here's a glimpse into my tech-infused rollercoaster called life:
                    </p>
                </div>

                <div class="experience">
                    <ul
                        class="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    Freelance
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Sep 2023 - Present
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Remote Freelance Developer
                                </h4>
                                {/* <p>
                                    Location - Remote
                                </p> */}
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://www.dataio.co/' target='_blank'>Dataio - On-Site</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Apr 2023 - Sep 2023
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Implementation Consultant
                                </h4>
                                <p>
                                    Location - Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://accubits.com/' target='_blank'>Accubits Technologies Inc - Remote</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Dec 2021 - Apr 2023
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Software Engineer
                                </h4>
                                <p>
                                    Location - Thiruvananthapuram, Kerala, India
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://www.vnsgu.ac.in/' target='_blank'>Vnsgu - Apprenticeship</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Mar 2021 - Jul 2021
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Java Developer
                                </h4>
                                <p>
                                    Location - Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='http://www.galaxydev.in/' target='_blank'>Galaxy Developers - Internship</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Dec 2020 - Feb 2021
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    .NET Developer
                                </h4>
                                <p>
                                    Location - Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://innovativeiteration.com/' target='_blank'> Innovative Iteration Software Solutions - Internship</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    Feb 2020 - May 2020
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    PHP Developer
                                </h4>
                                <p>
                                    Location - Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <br />
                <div class="mb-8 mt-7 md:my-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        My <span class="font-semibold text-theme">Education</span>
                    </h2>
                    <p class="max-w-xl mt-4 md:mt-6 subtitle">
                        Welcome to the digital realm where creativity meets cutting-edge technology! I am a passionate explorer of the vast universe of information, a trailblazer in the dynamic landscapes of Data Science and Information Technology.
                    </p>
                </div>

                <div class="experience">
                    <ul
                        class="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://www.iu.org/en-in/' target='_blank'>IU International University Of Applied Sciences</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    2024-2025
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Master's Degree In Data Science
                                </h4>
                                <p>
                                    Currently in Berlin, Germany for MSc in Data Science
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://www.vnsgu.ac.in/' target='_blank'>J.P.Dawer Institute Of Information Science And Technology - BSc (IT) & MSc (ICT)</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    2020 - 2022
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Master's Degree In Information Technology MSc (IT)
                                </h4>
                                <p>
                                    Finished MSc (I.T) from Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                        <li
                            class="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                            <div class="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    class="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    <a href='https://www.vnsgu.ac.in/' target='_blank'>J.P.Dawer Institute Of Information Science And Technology - BSc (IT) & MSc (ICT)</a>
                                </h6>
                                <p class="text-[13px] md:text-sm text-theme">
                                    2017-2020
                                </p>
                            </div>
                            <div
                                class="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    class="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Bachelor's Degree In Information Technology BSc (IT)
                                </h4>
                                <p>
                                    Completed BSc (I.T) from Surat, Gujarat, India
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default resume
