import React from 'react'
import './About.css'
function About({ initial }: any) {
    return <section className="about section container" id="about">
        <div className="about__container grid">
            <img src="/about.png" alt="" className="about__img" />

            <div className="about__data">
                <h2 className="section__title about__title">
                    Đoàn trường THPT Chuyên <br /> Trần Đại Nghĩa
                </h2>

                <p className="about__description">
                    We have over 4000+ unbiased reviews and our customers
                    trust our plant process and delivery service every time
                </p>

                <div className="about__details">
                    <p className="about__details-description">
                        <i className="ri-checkbox-fill about__details-icon"></i>
                        Học để biết.
                    </p>
                    <p className="about__details-description">
                        <i className="ri-checkbox-fill about__details-icon"></i>
                        Học để làm.
                    </p>
                    <p className="about__details-description">
                        <i className="ri-checkbox-fill about__details-icon"></i>
                        Học để tự khẳng định bản mình.
                    </p>
                    <p className="about__details-description">
                        <i className="ri-checkbox-fill about__details-icon"></i>
                        Học để cùng chung sống.
                    </p>
                </div>

                <a href="#activities" className="button--link button--flex">
                    Các hoạt động <i className="ri-arrow-right-down-line button__icon"></i>
                </a>
            </div>
        </div>
    </section>
}

export default About