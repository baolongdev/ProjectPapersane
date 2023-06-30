import React, { useEffect } from 'react';
import './Letrianvatruongthanh.css';
import anime from 'animejs';
import { TweenMax, Expo } from 'gsap';


function Letrianvatruongthanh() {
    useEffect(() => {
        // anime.timeline().add({
        //     targets: ""
        // })

        var textTitle = document.querySelector(".ltath__title");
        return () => {
            if (textTitle) {
                textTitle.innerHTML = (textTitle.textContent || '').replace(
                    /\S/g,
                    "<span class='ltath__letter'>$&</span>"
                );
            }


            anime.timeline().add({
                targets: ".ltath__title .ltath__letter",
                translateY: [-200, 0],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 6500 + 30 * i
            })

            TweenMax.staggerFrom(".ltath__data > .ltath__img",
                2,
                {
                    y: "110%",
                    ease: Expo.easeInOut,
                    delay: 1,
                    stagger: 0.4,
                }
            )
            TweenMax.to(".ltath__container", 2, {
                scale: "2",
                y: "90%",
                ease: Expo.easeInOut,
                delay: 5.5
            })
        }

    }, [])


    const cards = [];
    for (let i = 1; i < 12; i++) {
        cards.push(
            <img key={i} src={`/vhvn/${i}.jpg`} alt="" className="ltath__img" />
        );
    }

    return (
        <section className='ltath' id='ltath'>
            <div className="ltath__header">
                <div className="ltath__overlay"></div>
                <h1 className="ltath__title">Lễ hội âm nhạc</h1>
            </div>
            <div className="ltath__container container">
                <div className="ltath__data">{cards}</div>
            </div>
        </section>
    );
}

export default Letrianvatruongthanh;
