import React, { useEffect } from "react"
import "./Header.css"

// ==================== HEADER ==================== (Copied from Landing/components/Header) //
function Header({ initial }: any) {
  useEffect(() => {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu?.classList.add("show-menu")
      })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu?.classList.remove("show-menu")
      })
    }
    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll(".nav__link")

    function linkAction() {
      const navMenu = document.getElementById("nav-menu")
      // When we click on each nav__link, we remove the show-menu class
      navMenu?.classList.remove("show-menu")
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction))

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll("section[id]")

    function scrollActive() {
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight,
          sectionTop = (current as HTMLElement).offsetTop - 58,
          sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.add("active-link")
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.remove("active-link")
        }
      })
    }
    window.addEventListener("scroll", scrollActive)
    /*=============== SHOW SCROLL UP ===============*/
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up")
      // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (window.scrollY >= 400) scrollUp?.classList.add("show-scroll")
      else scrollUp?.classList.remove("show-scroll")
    }
    window.addEventListener("scroll", scrollUp)
  }, [])

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/LogoDoan.png" className="nav__logo-icon" alt="" />
          Đoàn trường THPT chuyên <br /> Trần Đại Nghĩa
          {/* <i className="ri-leaf-line nav__logo-icon"></i> */}
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {initial.titleTab.map((tabName: any, index: any) => (
              <li className="nav__item">
                <a
                  href={`${
                    tabName.link[0] === "#" ? "/" + tabName.link : tabName.link
                  }`}
                  key={index}
                  className={`nav__link ${tabName.class}`}
                >
                  {tabName.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          <i className="ri-moon-line change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
