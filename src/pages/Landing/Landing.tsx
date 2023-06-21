import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { Header, Home, About, Steps, Products, Questions, Contact, Footer, Scrollup } from "./components"
import InitialVariable from "../../store/InitialVariable";
function Landing() {
    const initialVar = InitialVariable();
    useEffect(() => {
        function scrollHeader() {
            const header = document.getElementById('header');
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
            if (window.scrollY >= 80) {
                header?.classList.add('scroll-header');
            } else {
                header?.classList.remove('scroll-header');
            }
        }
        window.addEventListener('scroll', scrollHeader);
    }, []);

    useEffect(() => {
        /*=============== DARK LIGHT THEME ===============*/
        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'ri-sun-line';

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () =>
            document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () =>
            themeButton?.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton?.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
        }

        // Activate / deactivate the theme manually with the button
        const handleThemeToggle = () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton?.classList.toggle(iconTheme);
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        };

        themeButton?.addEventListener('click', handleThemeToggle);

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            themeButton?.removeEventListener('click', handleThemeToggle);
        };
    }, []); // empty dependency array to run the effect only once
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
        });

        sr.reveal('.home__data');
        sr.reveal('.home__img', { delay: 500 });
        sr.reveal('.home__social', { delay: 600 });
        sr.reveal('.about__img, .contact__box', { origin: 'left' });
        sr.reveal('.about__data, .contact__form', { origin: 'right' });
        sr.reveal('.steps__card, .product__card, .questions__group, .footer', { interval: 100 });
        // Clean up the ScrollReveal instance
        return () => {
            sr.destroy();
        };
    }, []);

    return <Fragment>
        {/* <Header initial={initialVar} /> */}
        <Header initial={initialVar} />
        <main className="main">
            <Home initial={initialVar} />
            <About initial={initialVar} />
            <Steps initial={initialVar} />
            {/* <Products initial={initialVar} /> */}
            <Questions initial={initialVar} />
            <Contact initial={initialVar} />
        </main>
        <Footer initial={initialVar} />
        {/* =============== SCROLL UP =============== */}
        <Scrollup />
    </Fragment>
}

export default Landing