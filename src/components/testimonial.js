import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            rating: 5,
            content: "Hardik is a real go-to person for any project he is into. Such a passionate supporter for the lead/manager he is. Whenever there is some kind of chaos or crisis, he never escalates that situation but ensures that others also become cool so that all can focus on implementing a solution to the Problem. I wholeheartedly recommend him for the career opportunities he is going to pursue. All the best my boy!",
            author: "Anand Venkitaraman",
            role: "Delivery Manager",
            linkedin: "https://www.linkedin.com/in/anandvcetsdm/",
            imageSrc: "assets/img/testimonial/Anand.jpg"
        },
        {
            rating: 5,
            content: "It was a pleasure working with Hardik due to his work ethics and professional behaviour, but at the same time, having a fun and lovely attitude that shines across each conversation. You could visibly see his commitment during times of crisis, and I could have always expected nothing but the best effort from him when the situation demanded it. I would recommend him to any team that would like to have a committed and professional resource. Stay blessed.",
            author: "Tharun Abraham Elias",
            role: "Project Manager",
            linkedin: "https://www.linkedin.com/in/tharun-abraham-elias-7644531b2/",
            imageSrc: "assets/img/testimonial/Tharun.jpg"
        },
        {
            rating: 5,
            content: "I had the pleasure of working with Hardik for a year while he was a React Developer at Accubits Technologies. During this time, I witnessed his strong logic knowledge and impressive UI skills. Hardik's contributions to our healthcare product were invaluable, and he played a significant role in completing the authentication and appointment booking module in a timely manner.\n\nHardik's technical expertise in React was apparent from the start, and his ability to understand complex problems and create solutions was impressive. He was always willing to collaborate with the team and share his knowledge to improve the quality of our work. His commitment to delivering high-quality code was evident, and he always went the extra mile to ensure that everything was functioning as intended.\n\nIn addition to his technical abilities, I was impressed by Hardik's professionalism and work ethic. He was always punctual, reliable, and able to manage his time effectively. His positive attitude and willingness to take on new challenges made him a valuable member of our team.\n\nOverall, I highly recommend Hardik for any future opportunities. With his strong logic knowledge, excellent UI skills, and proven ability to complete projects on time, I have no doubt that he will continue to be a valuable asset to any organization.",
            author: "Nithya Rajan",
            role: "Technical Team Lead",
            linkedin: "https://www.linkedin.com/in/bearnithi/",
            imageSrc: "assets/img/testimonial/Nithya.jpg"
        },
        {
            rating: 5,
            content: "Hardik is an extremely dedicated and talented professional who consistently demonstrates a strong work ethic and a commitment to excellence. He is highly skilled in javascript, his attention to detail and ability to think creatively make him a valuable asset to any team. He is also a great communicator and team player, always willing to collaborate and share his ideas to help move projects forward.",
            author: "Jayakrishnan A V",
            role: "Technical Lead",
            linkedin: "https://www.linkedin.com/in/jayakrishnan-a-v-528a16112/",
            imageSrc: "assets/img/testimonial/Jay.jpg"
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
                        Positive Feedback From
                        Peers
                    </p>
                </div>

                <div class="mt-12 testimonial-slider">
                    <div class="swiper">
                        <div className="swiper-wrapper" style={{ justifyContent: 'center' }}>
                            {displayedTestimonials.map((testimonial, index) => (
                                <div key={index} className="testi-swiper-slide">
                                    <div className="text-center slider-inner md:px-5">
                                        <div className="image flex-center">
                                            <img src={testimonial.imageSrc} alt="" className="rounded-full" style={{ width: 150, height: 150 }} />
                                        </div>
                                        <div class="mt-12 mb-3 text-center rating text-lightOrange">
                                            {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                                    fill="#FFB657" />
                                            </svg>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                                    fill="#FFB657" />
                                            </svg>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                                    fill="#FFB657" />
                                            </svg>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                                    fill="#FFB657" />
                                            </svg>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                                    fill="#FFB657" />
                                            </svg> */}
                                        </div>
                                        <div className="text-sm md:text-[15px] leading-loose testi-content" style={{ maxHeight: "calc(1.5em * 5)", overflowY: "auto", scrollbarWidth: "none" }}>
                                            <div>
                                                {testimonial.content}
                                            </div>
                                        </div>
                                        <div className="mt-5 text-center author">
                                            <h6 className="text-lg font-medium text-black dark:text-white">
                                                <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">{testimonial.author}</a>
                                            </h6>
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
