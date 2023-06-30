import React from 'react'
import './Home.css'
function Home({ initial }: any) {
    return <section className='home' id='home'>
        <div className="home__container container grid">
            <img src="/home1.png" alt="" className="home__img" />

            <div className="home__data">
                <h1 className="home__title">
                    Trường THPT chuyên <br /> Trần Đại Nghĩa
                </h1>
                {/* <p className="home__description">
                    Lửa Trần Chuyên truyền đi là không bao giờ tắt
                </p> */}

                <div className="home__details">
                    <p className="home__details-description">
                        Học để biết - Học để làm - Học để tự khẳng định mình - Học để cùng chung sống
                    </p>
                </div>
                <a href="#about" className="button button--flex">
                    Tim hiểu thêm<i className="ri-arrow-right-down-line button__icon"></i>
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