import React from 'react';

const MobileMenus = ({ toggleMenu, isMenuOpen }) => {
    return (
        <>
            {/* <!-- Mobile Menu Bar Start --> */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
                <div className="text-lg font-medium name">
                    <a className='flex items-center gap-2 text-black dark:text-white' href='/'>
                        <img src="assets/img/partners/1.svg" alt="HardikShali" width={100} />
                        {/* <span>Hardik Shali</span> */}
                    </a>
                </div>
                {/* <!-- Mobile Hamburger Menu Start --> */}
                <button onClick={toggleMenu} className="w-12 h-12 border rounded-full hamburger menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center" type="button" aria-label="Open Mobile Menu">
                    <svg viewBox="0 0 20 12" className="w-6"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
                            className="fill-theme dark:fill-white" />
                    </svg>
                </button>
                {/* <!-- Mobile Hamburger Menu End --> */}
            </div>
            {/* <!-- Mobile Menu Bar End --> */}
            {/* <!-- Mobile Menu Sidebar Start --> */}
            <div style={{
                paddingLeft: '2rem',
                paddingRight: '2rem',
                paddingTop: '3rem',
                paddingBottom: '3rem'
            }} class={`mobile-menu fixed top-0 right-0 w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu}>
                <button className="absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack" aria-label="Close Menu">
                    <i className="fal fa-times"></i>
                </button>
                <div className="mb-6 text-lg font-medium text-black dark:text-white menu-title">
                    Menu
                </div>
                <ul className="space-y-5 font-normal main-menu">
                    <li data-scroll-nav="0" className="relative group active">
                        <a href="#home" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-home"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Home
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="1" className="relative group">
                        <a href="#about" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-user"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                About
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="2" className="relative group">
                        <a href="#" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-briefcase"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Service
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="3" className="relative group">
                        <a href="#skill" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-graduation-cap"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Skills
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="4" className="relative group">
                        <a href="#resume" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-file-alt"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Resume
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="5" className="relative group">
                        <a href="#portfolio" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-tasks-alt"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Poftfolio
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="6" className="relative group">
                        <a href="#blog" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-blog"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Blog
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="7" className="relative group">
                        <a href="#testimonial" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-comment-alt-lines"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Testimonial
                            </span>
                        </a>
                    </li>
                    <li data-scroll-nav="8" className="relative group">
                        <a href="#contact" className="flex items-center space-x-2 group">
                            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                                <i className="fal fa-envelope"></i>
                            </span>
                            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                                Contact
                            </span>
                        </a>
                    </li>
                </ul>
                <br /><br />
                <div className="mb-4 font-medium text-black dark:text-white menu-title text-md">
                    Get in Touch
                </div>
                {/* <!-- Social Share Icon Start  --> */}
                <div className="flex items-center space-x-4 social-icons">
                    <a href="#" className="flex transition duration-200 hover:text-white" title="Share with Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="flex transition duration-200 hover:text-white" title="Share with Linkedin">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="flex transition duration-200 hover:text-white" title="Share with X">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="flex transition duration-200 hover:text-white" title="Share with X">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                {/* <!-- Social Share Icon End  --> */}
            </div>
            {/* <!-- Mobile Menu Sidebar End --> */}
        </>
    )
}

export default MobileMenus
