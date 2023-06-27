import React from 'react'
import './Header.css'
function Header() {
    return <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                {/* <img src="/LogoDoan.png" className='nav__logo-icon' alt="" /> */}
                BOOKFLIX
            </a>
            <div className="bnav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item active-link">
                        <i className="ri-book-fill "></i>
                        <a href='/bookflix/books' className={`nav__link`}>Books</a>
                    </li>
                    <li className="nav__item">
                        <a href='/bookflix/blog' className={`nav__link `}>Blog</a>
                    </li>
                </ul>
            </div>

            <div className="nav__btns">
                <i className="ri-heart-line heart" id="heart-button"></i>
                <i className="ri-bookmark-line bookmark" id="bookmark-button"></i>
                {/* <div className="btn-link">Login</div> */}
            </div>
        </nav>
    </header>
}

export default Header