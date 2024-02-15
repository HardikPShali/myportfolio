import React, { useEffect } from 'react';
import Swiper from 'swiper';

const Introduce = () => {
    useEffect(() => {
        console.log('Initializing Swiper');
        new Swiper('.swiper', {
            // Swiper options here
            slidesPerView: 3,
            spaceBetween: 30,
            // Add more options as needed
        });
    }, []);


    return (
        //  <!-- Hero/Introduction Section Start -->
        <div data-scroll-index="0" id="home"
            class="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl hero-section md:p-8 lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-home text-theme"></i>
                    INTRODUCE
                </div>
                <div class="items-center gap-6 hero-content md:flex xl:gap-10">
                    <div class="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
                        <h1
                            class="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
                            I Shape Frontend Experiences, <br />
                            <span class="text-theme">I Uncover Data Insights</span>
                        </h1>
                        <p>
                            Frontend Developer by day,<span class="font-medium text-black dark:text-white/90"> Data Scientist by night</span>
                        </p>
                        <ul class="flex items-center mt-4 -mx-3 lg:mt-5">
                            <li class="flex items-center mx-3 text-regular">
                                <i class="mr-2 fal fa-check-double text-theme"></i>
                                Available for work
                            </li>
                            <li class="flex items-center mx-3 text-regular">
                                <i class="mr-2 fal fa-check-double text-theme"></i>
                                Full Time Job
                            </li>
                        </ul>
                        <ul class="mt-7 buttons">
                            <li data-scroll-nav="8">
                                <a href="#contact"
                                    class="btn-theme inline-flex items-center gap-2 bg-theme text-power__black py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base">
                                    <i class="fal fa-paper-plane"></i>
                                    Let's Collaborate
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div class="hero-image flex-[0_0_20.3rem] max-md:hidden">
                        <img src="assets/img/me12-whitetheme.png" class="dark:hidden" alt="Hero Image - Light Mode" />
                        <img src="assets/img/me12-darktheme.png" class="hidden dark:block" alt="Hero Image - Dark Mode" />
                    </div>
                </div>
                <div class="mb-2 mt-14 xl:mb-0 xl:mt-20">
                    <div class="items-center grid-cols-12 overflow-hidden md:grid">
                        <div class="hidden col-span-2 md:inline-block">
                            <h6
                                class="font-medium text-black dark:text-white/80 text-sm md:max-w-[8rem] border-l border-theme pl-4">
                                Trusted companies
                            </h6>
                        </div>
                        <div class="col-span-10 logo-slider">
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <a href="https://www.ralphlauren.com/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/RL.png" alt="Ralph Lauren" />
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="https://www.futuregrail.com/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/f.png" alt="FutureGrail" />
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="https://www.instagram.com/healthieru_ae/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/h.png" alt="HealthierU" />
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="https://www.ralphlauren.com/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/RL.png" alt="Ralph Lauren" />
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="https://www.futuregrail.com/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/f.png" alt="FutureGrail" />
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="https://www.instagram.com/healthieru_ae/" target='_blank'
                                            class="transition duration-200 flex-center">
                                            <img src="assets/img/partners/h.png" alt="HealthierU" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        /* <!-- Hero/Introduction Section End --> */
    )
}

export default Introduce
