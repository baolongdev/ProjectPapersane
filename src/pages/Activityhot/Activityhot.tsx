import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Activityhot.css'
import { gsap } from 'gsap';
import InitialVariable from "../../store/InitialVariable"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import { useParams } from 'react-router-dom';
import convertDocxToText from "../../store/convertDocxToText"
import { Notfound } from '../../pages'
function Activityhot({ match }: any) {
    const { id } = useParams();
    const linkValues = InitialVariable().activities.map(activity => activity.link.split('/')[1]);
    const componentsRef = useRef<(HTMLDivElement | null)[]>([]);
    const btnReturnRef = useRef(null);

    const [docxText, setDocxText] = useState('');

    if (!linkValues.includes(id as string)) {
        return (
            <Notfound />
        )
    }

    useEffect(() => {
        convertDocxToText(`/activities/${id}/gioiThieu.docx`)
            .then((text) => {
                setDocxText(text);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    useEffect(() => {
        if (id == "lhan")
            document.documentElement.style.setProperty("--imgheight", "200%")
    }, []);

    useLayoutEffect(() => {
        const components = componentsRef.current
        components.forEach((component) => {
            const inner = component?.querySelectorAll(".activityhot__loader__column-inner") as NodeListOf<HTMLElement>
            const is__edge = component?.querySelectorAll(".activityhot__loader__column-inner.is-edge") as NodeListOf<HTMLElement>
            const is__center = component?.querySelectorAll(".activityhot__loader__column-inner.is-center") as NodeListOf<HTMLElement>
            const is__reversed = component?.querySelectorAll(".activityhot__loader__column-inner.is-reversed") as NodeListOf<HTMLElement>
            const is__middle = component?.querySelectorAll(".activityhot__loader__img.is-middle") as NodeListOf<HTMLElement>
            const loader__flex = component?.querySelectorAll(".activityhot__loader-flex") as NodeListOf<HTMLElement>
            const textTitle = document?.querySelector(".activityhot__title") as HTMLElement
            const tlset = gsap.timeline()
            tlset.set(inner, {
                width: "100vw",
                height: "350%"
            }).set(is__edge, {
                translateY: "70%"
            }).set(is__center, {
                translateY: "40%"
            }).set(is__reversed, {
                translateY: "-40%"
            }).set(is__middle, {
                scale: "1.5",
            }).set(loader__flex, {
                scale: "0.23",
            })
            const tl = gsap

            tl.to(inner, {
                width: "100vw",
                height: "100%",
                duration: 2.5,
                ease: "sine.inOut",
            })
            tl.to(is__edge, {
                translateY: "0",
                duration: 2.5,
                ease: "cubic-bezier(.854, .118, .357, .767)",
            })
            tl.to(is__center, {
                translateY: "0",
                duration: 2.5,
                ease: "cubic-bezier(.854, .118, .357, .767)",
            })
            tl.to(is__reversed, {
                translateY: "10%",
                duration: 2.5,
                ease: "cubic-bezier(.854, .118, .357, .767)",
            })
            tl.to(is__middle, {
                scale: "1",
                ease: "cubic-bezier(.445, .05, .111, .966)",
                // maskImage: "linear-gradient(black, transparent)",
                duration: 2,
                delay: 2
            })
            tl.timeline().set(is__middle, {
                maskImage: "linear-gradient(black 100%, transparent)",
                // ease: "sine.in",
                duration: 2,
            }).to(is__middle, {
                maskImage: "linear-gradient(black 0%, transparent)",
                duration: 2.5,
                ease: "power4.out",
                delay: 2.5
            })
            tl.to([loader__flex], {
                scale: "1",
                ease: "cubic-bezier(.445, .05, .111, .966)",
                duration: 2,
                delay: 2
            })
            if (textTitle) {
                const nd = InitialVariable().activities[linkValues.indexOf(id as string)].title
                let position = nd.replace(/\s/g, "").indexOf('/')

                textTitle.innerHTML = (textTitle.textContent || '').replace(
                    /\S/g,
                    "<span class='activityhot__letter'>$&</span>"
                );
                textTitle.children[position].innerHTML = "<br>"


            }


            tl.timeline()
                .from(textTitle.querySelectorAll(".activityhot__letter"), {
                    top: -300,
                    ease: "cubic-bezier(.445, .05, .111, .966)",
                    duration: 0.8,
                    stagger: 0.05,
                    delay: 4
                }).fromTo(document.querySelector(".activityhot__description"), {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.8,
                }).fromTo(document.querySelector(".activityhot__link"), {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.8,
                })
                .to([btnReturnRef.current, document.querySelector(".activityhot__btnNext") as HTMLElement], {
                    opacity: 1,
                    duration: 2,
                }, "=-1")
        })
    }, [])

    return (
        <section className='activityhot' id='activityhot'>
            <div className="activityhot__return-box"
                onClick={() => {
                    window.history.back();
                }}
                ref={btnReturnRef}
            >
                <i className="ri-arrow-left-line activityhot__return button--flex" />
            </div>

            <div className="activityhot__loader"
                ref={(e) => (componentsRef.current.push(e))}
            >
                <div className="activityhot__loader-flex">
                    <div className="activityhot__loader-column">
                        <div className="activityhot__loader__column-inner is-edge">
                            {
                                [...Array(5)].map((_, i) => (
                                    <div key={i} className="activityhot__loader__img-wrap">
                                        <img src={`/activities/${id}/${i + 1}.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="activityhot__loader-column is-alt">
                        <div className="activityhot__loader__column-inner is-reversed">
                            {
                                [...Array(5)].map((_, i) => (
                                    <div key={i} className="activityhot__loader__img-wrap">
                                        <img src={`/activities/${id}/${(i + 1) + 5}.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="activityhot__loader-column">
                        <div className="activityhot__loader__column-inner is-center">
                            <div className="activityhot__loader__img-wrap">
                                <img src={`/activities/${id}/16.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                            </div>
                            <div className="activityhot__loader__img-wrap">
                                <img src={`/activities/${id}/17.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                            </div>
                            <Swiper
                                loop={true}
                                autoplay={{
                                    delay: 8000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: '.swiper-button-next'
                                }}
                                modules={[Autoplay, Navigation]}

                                className="activityhot__loader__img-wrap">
                                {
                                    [...Array(25)].map((_, i) => (
                                        <SwiperSlide key={i}>
                                            <img src={`/activities/${id}/${i + 1}.jpg`} loading="eager" alt="" className={`activityhot__loader__img is-middle`} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            <div className="activityhot__loader__img-wrap">
                                <img src={`/activities/${id}/19.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                            </div>
                            <div className="activityhot__loader__img-wrap">
                                <img src={`/activities/${id}/20.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                            </div>
                        </div>
                    </div>
                    <div className="activityhot__loader-column is-alt">
                        <div className="activityhot__loader__column-inner is-reversed">
                            {
                                [...Array(5)].map((_, i) => (
                                    <div key={i} className="activityhot__loader__img-wrap">
                                        <img src={`/activities/${id}/${(i + 1) + 5 * 3}.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="activityhot__loader-column">
                        <div className="activityhot__loader__column-inner is-edge">
                            {
                                [...Array(5)].map((_, i) => (
                                    <div key={i} className="activityhot__loader__img-wrap">
                                        <img src={`/activities/${id}/${(i + 1) + 5 * 4}.jpg`} loading="eager" alt="" className="activityhot__loader__img" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='activityhot__data grid'>
                <div className="">
                    <h1 className="activityhot__title">
                        {InitialVariable().activities[linkValues.indexOf(id as string)].title}
                    </h1>
                    <p className="activityhot__description">
                        {docxText}
                    </p>
                    <a href={InitialVariable().activities[linkValues.indexOf(id as string)].linkFB} target='_blank' className="activityhot__link">Thông tin khác</a>
                </div>
                <div className="activityhot__btnNext swiper-button-next">
                    <div className='activityhot__line'></div>
                    <div className='activityhot__line'></div>
                </div>
            </div>
        </section >
    );
}

export default Activityhot;
