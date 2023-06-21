import React from 'react'
import './Footer.css'
function Footer({ initial }: any) {
    return <footer className="footer section">
        <div className="footer__container container grid">
            <div className="footer__content">
                <a href="#" className="footer__logo">
                    <img src="src\assets\img\LogoDoan.png" className='footer__logo-icon' alt="" />
                    Đoàn trường THPT chuyên <br /> Trần Đại Nghĩa
                </a>

                <h3 className="footer__title">
                    Đăng ký nhận bản tin của chúng tôi
                    <br /> để cập nhật thông tin mới nhất
                </h3>

                <div className="footer__subscribe">
                    <input type="email" placeholder="Enter your email" className="footer__input" />

                    <button className="button button--flex footer__button">
                        Subscribe
                        <i className="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </div>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">ĐỊa chỉ</h3>

                <ul className="footer__data">
                    <a href="https://goo.gl/maps/skM11oc3NCbksCvF9" target='_blank' className="footer__social-link">
                        <li className="footer__information">20 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP.HCM.</li>
                    </a>
                    <a href="https://goo.gl/maps/4E1FoPT91D9Fkn4x9" target='_blank' className="footer__social-link">
                        <li className="footer__information">53 Nguyễn Du, Phường Bến Nghé, Quận 1, TP.HCM</li>
                    </a>
                    <a href="https://goo.gl/maps/weMtiVsQC3a4m1rB7" target='_blank' className="footer__social-link">
                        <li className="footer__information">Lô P2 Khu tái định cư 38,4 ha, Phường An Khánh, TP Thủ Đức</li>
                    </a>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Liên lạc</h3>

                <ul className="footer__data">
                    <li className="footer__information">ĐT: 028 38 229 040 </li>
                    <li className="footer__information">Fax: 08 38 258 368</li>

                    <div className="footer__social">
                        <a href="https://www.facebook.com/doantruongtdn" target='_blank' className="footer__social-link">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="http://www.trandainghia.edu.vn/" target='_blank' className="footer__social-link">
                            <i className="ri-google-fill"></i>
                        </a>
                        <a href="mailto:info@trandainghia.edu.vn" target='_blank' className="footer__social-link">
                            <i className="ri-mail-fill"></i>
                        </a>
                    </div>
                </ul>
            </div>

            {/* <div className="footer__content">
                <h3 className="footer__title">
                    We accept all credit cards
                </h3>

                <div className="footer__cards">
                    <img src="src/assets/img/card1.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card2.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card3.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card4.png" alt="" className="footer__card" />
                </div>
            </div> */}
        </div>
        <p className="footer__copy">&#169; LBL. All rigths reserved</p>
    </footer>
}

export default Footer