import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "./Clbinfo.css";
import { useParams } from 'react-router-dom';
import DataClb from '../../store/DataClb';
import convertDocxToText from './convertDocxToText'
import ExtractorColor from './ExtractorColor'
import { Expo, gsap } from 'gsap';


function Clbinfo({ match }: any) {
    const { clbinfo } = DataClb();
    const { id } = useParams();
    const formattedId = id?.replace(/-/g, "."); // Use empty string as default value if 'id' is undefined
    const dataClb = clbinfo.find(item => item.id === formattedId);
    const RefDescription = useRef<HTMLParagraphElement>(null);

    const [docxText, setDocxText] = useState<string>('');
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const groupImageRef = useRef<HTMLDivElement | null>(null);
    const backgroundRef = useRef<HTMLDivElement | null>(null);
    const btnReturnRef = useRef(null);
    const LogoRefs = useRef<(HTMLImageElement | null)>(null);


    useEffect(() => {
        convertDocxToText(`/clbinfo/${dataClb?.id}/gioiThieu.docx`)
            .then((text) => {
                setDocxText(text);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { R, G, B } = await ExtractorColor(`/clbinfo/${dataClb?.id}/Logo.png`);
                (document.querySelector(".section__title-center") as HTMLElement).style.color = `rgb(${R}, ${G}, ${B})`;
            } catch (error) {
                console.error('Error extracting color:', error);
            }
        };
        return () => {
            fetchData();
        }
    }, []);

    useLayoutEffect(() => {
        const isMobile = window.innerWidth < 767;
        const t1 = gsap.timeline({ defaults: { duration: 2.5, ease: "expo.out" } })
        t1.to(LogoRefs.current, {
            delay: 0.5,
            scale: 0,
            clipPath: "polygon(0% 100%, 100% 100%, 100: 0%, 0% 0%)",
            opacity: 0,
            ease: "power3.inOut",
            duration: 2,
        }, "=.1")
            .from(imageRefs.current, {
                y: "110%",
                clipPath: "polygon(0% 100%, 100% 100%, 100: 0%, 0% 0%)",
                opacity: .8,
                ease: "power3.inOut",
                duration: 2,
                stagger: {
                    amount: 3,
                }
            }, "=.1")

            .to(imageRefs.current, {
                left: isMobile ? "0%" : "random([-40%,-36%,35%,39%])",
                top: isMobile ? "0%" : "random([-20%,-0%,20%,30%])",
                rotate: isMobile ? 0 : "random(-20, 20)",
                scale: isMobile ? 1 : "random(0.2, 0.25)",
                cursor: isMobile ? "auto" : "move",
            })
            .to(groupImageRef.current, {
                scale: isMobile ? 2 : 1,
                opacity: isMobile ? 0 : 1,
                display: isMobile ? "none" : "block",
            })
            .from(backgroundRef.current, {
                opacity: 0,
                ease: Expo.easeInOut,
                transformOrigin: 'center',
                // delay: 1
            }, "=-.5")
            .to(btnReturnRef.current, {
                opacity: 1,
                ease: "power4.inOut",
                clipPath: "polygon(0% 100%, 100% 100%, 100: 0%, 0% 0%)",
                zIndex: 10,
            }, "=-.5")
        return () => {
            t1.revert();
        }
    }, [])

    useLayoutEffect(() => {
        let events: { [key: string]: { [key: string]: string } } = {
            mouse: {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup",
            },
            touch: {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
            },
        };

        let deviceType = "";

        const isTouchDevice = () => {
            try {
                document.createEvent("ToggleEvent");
                deviceType = "touch";
                return true;
            } catch (e) {
                deviceType = "mouse";
                return false;
            }
        };
        const touchDevice = isTouchDevice(); // Store the touch device result


        Array.from(imageRefs.current).forEach((draggableElem: HTMLImageElement | null) => {
            let moveElement = false;
            let initialX = 0,
                initialY = 0;

            const handleDown = (e: MouseEvent | TouchEvent) => {
                e.preventDefault();
                initialX = touchDevice ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
                initialY = touchDevice ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
                moveElement = true;
            };

            const handleMove = (e: MouseEvent | TouchEvent) => {
                if (moveElement && draggableElem) { // Add null check for draggableElem
                    e.preventDefault();
                    let newX = touchDevice ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
                    let newY = touchDevice ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
                    draggableElem.style.top =
                        draggableElem.offsetTop - (initialY - newY) + "px";
                    draggableElem.style.left =
                        draggableElem.offsetLeft - (initialX - newX) + "px";

                    initialX = newX;
                    initialY = newY;
                }
            };

            const stopMovement = () => {
                moveElement = false;
            };
            draggableElem?.addEventListener(events[deviceType].down, handleDown as EventListener);
            draggableElem?.addEventListener(events[deviceType].move, handleMove as EventListener);
            draggableElem?.addEventListener("mouseleave", stopMovement);
            draggableElem?.addEventListener(events[deviceType].up, stopMovement);
            return () => {
                draggableElem?.removeEventListener(events[deviceType].down, handleDown as EventListener);
                draggableElem?.removeEventListener(events[deviceType].move, handleMove as EventListener);
                draggableElem?.removeEventListener("mouseleave", stopMovement);
                draggableElem?.removeEventListener(events[deviceType].up, stopMovement);
            };
        });
        return () => {
        }
    }, []);

    useEffect(() => {
        const updateGroupImageHeight = () => {
            if (backgroundRef.current && groupImageRef.current) {
                const backgroundHeight = backgroundRef.current.clientHeight;
                const windowHeight = window.innerHeight;

                // So sánh chiều dài của backgroundRef với chiều dài của trang web
                const heightToSet = Math.max(backgroundHeight, windowHeight);

                groupImageRef.current.style.height = `${heightToSet}px`;
            }
        };

        updateGroupImageHeight();

        const resizeObserver = new ResizeObserver(updateGroupImageHeight);
        if (backgroundRef.current) {
            resizeObserver.observe(backgroundRef.current);
        }

        return () => {
            if (backgroundRef.current) {
                resizeObserver.unobserve(backgroundRef.current);
            }
        };
    }, [backgroundRef]);


    return (
        <section className="clbinfo section" id='clbinfo'>
            <i onClick={() => {
                window.close();
            }}
                className="ri-arrow-left-line Clbinfo__return button button--flex"
                ref={btnReturnRef}
            />
            <div className="clbinfo__bg" ref={backgroundRef}>
                <h2 className="section__title-center clbinfo__title">
                    {dataClb?.name}
                </h2>
                <img src={`/clbinfo/${dataClb?.id}/banner.png`} className='clbinfo__logo' alt="" />
                <div className="clbinfo__container grid">
                    <p className='clbinfo__description' ref={RefDescription}>{docxText}</p>
                </div>
            </div>
            <div className='clbinfo__groupImage' ref={groupImageRef}>
                <div className="clbinfo__blur">

                    {
                        [...Array(7)].map((_, i) => (
                            <img
                                onError={() => {
                                    imageRefs.current[i]?.remove()
                                }}
                                onDoubleClick={() => {
                                    imageRefs.current[i]?.classList.toggle("imageShow");
                                }}
                                key={i}
                                src={`/clbinfo/${dataClb?.id}/image/${i + 1}.jpg`}
                                className={`clbinfo__groupImage-image image${i}`}
                                ref={(el) => (imageRefs.current[i] = el)}
                                alt=""
                            />
                        ))
                    }
                </div>
            </div>
            <img src={`/clbinfo/${dataClb?.id}/banner.png`} className='clbinfo__logo-overlay' ref={LogoRefs} alt="" />

        </section>
    );
}
// { `/clbinfo/${dataClb?.id}/gioiThieu.docx` }
export default Clbinfo;
