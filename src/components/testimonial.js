import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            imageSrc: "assets/img/testimonial/author1.png",
            ratings: 5,
            content: "Working with Reddick is a game-changer. Their coding expertise and commitment to quality make every project a success.",
            authorName: "Alex Johnson",
            role: "Developer"
        },
        {
            imageSrc: "assets/img/testimonial/author2.png",
            ratings: 5,
            content: "Reddick exceeds expectations with top-tier coding skills. Reliable, collaborative, and a true asset to any project. Highly recommended.",
            authorName: "Mily Martin",
            role: "CEO - itTheme"
        },
        {
            imageSrc: "assets/img/testimonial/author1.png",
            ratings: 5,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            authorName: "John Doe",
            role: "Designer"
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [displayedTestimonials, setDisplayedTestimonials] = useState([testimonialsData[startIndex]]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
        }, 3000); // Transition every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const nextTestimonials = () => {
        setStartIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonials = () => {
        setStartIndex(prevIndex => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        setDisplayedTestimonials([testimonialsData[startIndex]]);
    }, [startIndex]);

    return (
        <div data-scroll-index="7" id="testimonial"
            class="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            <div class="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i class="fal fa-comment-alt-check text-theme"></i>
                    TESTIMONIAL
                </div>
                <div class="mt-5 mb-8 md:my-10 section-title">
                    <h2
                        class="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        What <span class="font-semibold text-theme">People Say</span>
                    </h2>
                    <p class="max-w-xl mt-4 md:mt-6 subtitle">
                        I design products that are more than pretty. I make them shippable and usable, tempor
                        non mollit dolor et do aute
                    </p>
                </div>

                <div class="mt-12 testimonial-slider">
                    <div class="swiper" style={{ justifyContent: 'center' }}>
                        <div className="swiper-wrapper">
                            {displayedTestimonials.map((testimonial, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="text-center slider-inner md:px-5">
                                        <div className="image flex-center">
                                            <img src={testimonial.imageSrc} alt="" />
                                        </div>
                                        <div className="text-sm md:text-[15px] leading-loose content">
                                            {testimonial.content}
                                        </div>
                                        <div className="mt-5 text-center author">
                                            <h6 className="text-lg font-medium text-black dark:text-white">{testimonial.authorName}</h6>
                                            <p className="text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            class="testimonial-slider-navigation flex justify-center items-center gap-2.5 mt-10 lg:mt-12">
                            <button
                                class="transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                                aria-label="Previous" onClick={prevTestimonials}>
                                <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18 5.08006C18 4.77812 17.7121 4.5334 17.3571 4.5334L2.19486 4.5334L6.07553 0.933214C6.32659 0.719715 6.32659 0.373628 6.07553 0.160126C5.82448 -0.0533767 5.41745 -0.0533766 5.1664 0.160126L0.188289 4.69352C-0.0627618 4.90702 -0.0627618 5.2531 0.188289 5.4666L5.33115 9.83986C5.5822 10.0534 5.98923 10.0534 6.24028 9.83986C6.49134 9.62637 6.49134 9.28028 6.24028 9.06678L2.19486 5.62672L17.3571 5.62671C17.7121 5.62671 18 5.38199 18 5.08006Z"
                                        class="fill-[#A0A0A0] group-hover:fill-white" />
                                </svg>
                            </button>
                            <div class="text-sm font-light text-center text-black dark:text-white counter w-7"></div>
                            <button
                                class="transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                                aria-label="Next" onClick={nextTestimonials}>
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
        </div>
    )
}

export default Testimonials
