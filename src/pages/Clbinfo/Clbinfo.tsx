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

    useLayoutEffect(() => {
        const isMobile = window.innerWidth < 767;
        const t1 = gsap.timeline({ defaults: { duration: 2.5, ease: "expo.out" } })
        t1.to(LogoRefs.current, {
            scale: 0,
            opacity: 0,
            ease: "power3.inOut",
            duration: 2,
        }, "=.1")
            .from(imageRefs.current, {
                y: "110%",

                opacity: .8,
                ease: "power3.inOut",
                duration: 2,
                stagger: {
                    amount: 3,
                },
            }, "=.1")

            .to(imageRefs.current, {
                left: "random([-40%,-36%,35%,39%])",
                top: "random([-20%,-0%,20%,30%])",
                rotate: "random(-20, 20)",
                scale: "random(0.2, 0.25)",
                cursor: "move",
            })
            .from(backgroundRef.current, {
                opacity: 0,
                ease: Expo.easeInOut,
                transformOrigin: 'center',
            }, "=-2.8")
            .to(btnReturnRef.current, {
                opacity: 1,
                ease: "power4.inOut",

                zIndex: 10,
            }, "=-2")
            .to(imageRefs.current, {
                pointerEvents: "auto"
            })
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
            // if (backgroundRef.current && groupImageRef.current) {
            //     }
            const backgroundHeight = (backgroundRef.current as HTMLElement).offsetHeight;
            const windowHeight = window.innerHeight;
            console.log(backgroundHeight, windowHeight);

            if (backgroundHeight <= windowHeight) {
                console.log("add");
                (groupImageRef.current as HTMLElement).classList.add("clbinfo__fullview");
                (backgroundRef.current as HTMLElement).classList.add("clbinfo__fullview");
            } else {
                console.log("remove");
                (groupImageRef.current as HTMLElement).classList.remove("clbinfo__fullview");
                (backgroundRef.current as HTMLElement).classList.remove("clbinfo__fullview");
            }


        };

        updateGroupImageHeight();

        const handleResize = () => {
            updateGroupImageHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [docxText]);

    useEffect(() => {
        const changeBg = () => {
            if (backgroundRef.current) {
                backgroundRef.current.style.backgroundColor = dataClb?.BgColor || "#FFF";
            }
        };
        changeBg();
    }, []);

    const specialBg = ["theplasbitcampaign", "tomun2021", "clbnhiepanhtdn", "vanhoavntdnschool", "clbbaochitruyenthongtdn"]


    return (
        <section className="clbinfo section" id='clbinfo'>
            <i onClick={() => {
                window.close();
            }}
                className="ri-arrow-left-line Clbinfo__return button button--flex"
                ref={btnReturnRef}
            />
            <div className="clbinfo__bg" ref={backgroundRef}>
                <h2 className={`section__title-center clbinfo__title ${dataClb?.TextColor} clbinfo__bg-limitedWidth`}>
                    {dataClb?.name}
                </h2>
                <img src={`/clbinfo/${dataClb?.id}/Logo.png`} className='clbinfo__logo clbinfo__bg-limitedWidth' alt="" />
                <div className="clbinfo__container clbinfo__bg-limitedWidth">
                    <p className={`clbinfo__description ${dataClb?.TextColor}`} ref={RefDescription}>{docxText}</p>
                </div>
            </div>
            <div className='clbinfo__groupImage ' ref={groupImageRef}>
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
            <img src={`/clbinfo/${dataClb?.id}/Logo${specialBg.includes(dataClb?.id as string) ? 1 : ""}.png`} className='clbinfo__logo-overlay' ref={LogoRefs} alt="" />

        </section>
    );
}
// { `/clbinfo/${dataClb?.id}/gioiThieu.docx` }
export default Clbinfo;
