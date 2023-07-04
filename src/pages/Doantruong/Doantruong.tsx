import React, { useLayoutEffect, useRef } from 'react';
import './Doantruong.css';
import { infoDoanTruong } from '../../store'

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger separately

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    markers: true
});

function Doantruong() {
    const btnReturnRef = useRef(null);
    const info = infoDoanTruong
    return (
        <section className="doantruong" id='doantruong'>
            {/* <div className="home__container">
                <i ref={btnReturnRef} onClick={() => { window.close(); }} className="ri-arrow-left-line doantruong__return button button--flex" />
            </div> */}
            <div className="doantruong__container">
                <div className="doantruong__sticky grid">
                    <div className="doantruong__content gridSettings">
                        <div className="doantruong__tab-wrapper">
                            <div className="doantruong__tab-list">
                                <div className="doantruong__tab-item is-active">
                                    <p className="doantruong__tab-text">plan</p>
                                    <div className="doantruong__tab-line" />
                                </div>
                            </div>
                        </div>
                        <div className="doantruong__about">
                            <div className="doantruong__about-list">
                                <div className="doantruong__about-item is-active">
                                    <img src="doantruong__about__mobile-icon" alt="" />
                                    <div className="doantruong__about__heading-wrap">
                                        <h2>The sitemap of the experience</h2>
                                    </div>
                                    <p className="doantruong__about-content">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    </p>
                                    <div className="doantruong__about__mobile-img">
                                        <img className='doantruong__about__mobile-photo' src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="doantruong__visual gridSettings">
                        <div className="doantruong__visual-list">
                            <div className="doantruong__img-list">
                                <div className="doantruong__img-item is-active">
                                    <img className='doantruong__img-photo' src="" alt="" />
                                    <img className='doantruong__img-icon' src="" alt="" />
                                </div>
                                {/* List */}
                            </div>
                        </div>
                        <p className="doantruong__numbers">
                            <span tr-scroll-toggle="number-current">1</span>
                            /
                            <span tr-scroll-toggle="number-total">3</span>
                        </p>
                        <div className="doantruong__scroll-progress" />
                    </div>
                </div>
                <div className="doantruong__trigger" />
            </div>


            {/* <img src={`/bch/logoDT.png`} className='doantruong__logo-overlay' ref={LogoOverlayRefs} alt="" /> */}
        </section >
    );
}

export default Doantruong;
