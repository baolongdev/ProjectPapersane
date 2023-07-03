import React, { useEffect } from 'react'
import './Home.css'
import Swiper from 'swiper';
import { EffectFade, Autoplay, Thumbs } from "swiper";

function Home({ initial }: any) {
    const numberOfPhotos = 10
    useEffect(() => {
        const galleryTop = new Swiper('.home__slider', {
            effect: 'fade',
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            modules: [EffectFade, Autoplay],
        });

        return () => {
            galleryTop.destroy();
        };
    }, []);
    return <section className='home' id='home'>
        <div className="home__container container grid">
            <div className="swiper-container home__slider">
                <div className="swiper-wrapper home__slider-swiper">
                    {
                        [...Array(numberOfPhotos)].map((_, i) => (
                            <div key={i + 1} className="swiper-slide">
                                <img src={`/home/${i + 1}.png`} alt="" className="home__slider-img home__slider-mask" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="home__data">
                <h1 className="home__title">
                    Trường THPT chuyên <br /> Trần Đại Nghĩa
                </h1>
                <p className="home__description">
                    Lửa Trần Chuyên truyền đi là không bao giờ tắt
                </p>

                {/* <div className="home__details">
                    <p className="home__details-description">
                        Học để biết - Học để làm - Học để tự khẳng định mình - Học để cùng chung sống
                    </p>
                </div> */}
                <a href="#brainstorm" className="button button--flex">
                    Scroll Down
                    {/* <i className="ri-arrow-down-line button__icon"></i> */}
                </a>
            </div>

            <div className="home__social">
                <span className="home__social-follow">Follow Us</span>

                <div className="home__social-links">
                    <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="home__social-link">
                        <i className="ri-twitter-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default Home