import React from 'react'

const about = () => {
    return (
        //   < !--About Me Section Start-- >
        <div data-scroll-index="1" id="about"
            class="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-user text-theme"></i>
                    ABOUT ME
                </div>
                <div class="mt-7 md:mt-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        About <span class="font-semibold text-theme">Me</span>
                    </h2>
                    <p class="max-w-2xl mt-4 md:mt-6 subtitle">
                        Hello, I'm <span class="text-black dark:text-white">Hardik Shali</span> , a dedicated front-end developer with a passion for creating user-centric digital solutions. I blend creativity with technical prowess to craft aesthetically pleasing, functionally robust websites. Recently, I've delved into the world of data, seeking insights to enhance user experiences. Beyond the digital realm, music, sports, and poetry fuel my creativity. Let's shape the future of digital experiences together.
                    </p>
                </div>
                <div class="mt-6 section-content">
                    <div class="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
                        <a href="#"
                            class="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white">
                            Data Scientist
                        </a>
                        <a href="#"
                            class="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white">
                            Frontend Developer
                        </a>
                        <a href="#"
                            class="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white">
                            AI Enthusiast
                        </a>
                    </div>

                    <ul class="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">Phone</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white"><a href="tel:+919724641610 callto:+4915739438462">+(49) 157-39438462</a> </span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">Email</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white">
                                <a href="mailto:hardikshali1612@gmail.com" >
                                    hardikshali1612@gmail.com
                                </a>
                            </span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">Skype</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white">live:.cid.bf607b9923b232d5</span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">Github</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white">
                                <a target='_blank' href="https://github.com/HardikPShali">
                                    Visit My GitHub Profile
                                </a>
                            </span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">Language</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white">English, German, Hindi, Gujarati, Marathi</span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex-[0_0_6rem]">LinkedIn</span>
                            <span class="flex-[0_0_2rem]">:</span>
                            <span class="text-black dark:text-white">
                                <a target='_blank' href="https://www.linkedin.com/in/hardikshali/">
                                    Connect on LinkedIn
                                </a>
                            </span>
                        </li>
                    </ul>

                    <ul class="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
                        <li class="">
                            <div class="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>2</span>+
                            </div>
                            <div class="text-sm">Years Of Experience</div>
                        </li>
                        <li class="">
                            <div class="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>4</span>+
                            </div>
                            <div class="text-sm">Handled Projects</div>
                        </li>
                        <li class="">
                            <div class="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>4</span>+
                            </div>
                            <div class="text-sm">Certificates</div>
                        </li>
                        {/* <li class="">
                            <div class="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>18</span>
                            </div>
                            <div class="text-sm">Awards Won</div>
                        </li> */}
                    </ul>

                </div>
            </div>

        </div >
        //   <!--About Me Section End-- >
    )
}

export default about
