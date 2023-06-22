import React, { Fragment, useEffect } from 'react'
import './Activities.css'
function activities({ initial }: any) {
    useEffect(() => {
        const modalViews = document.querySelectorAll('.activities__modal');
        const modalBtns = document.querySelectorAll('.activities__card-button');
        const modalClose = document.querySelectorAll('.activities__modal-close');

        const modal = (modalClick: number) => {
            modalViews[modalClick].classList.add('active-modal');
        };

        modalBtns.forEach((mb, i) => {
            mb.addEventListener('click', () => {
                modal(i);
            });
        });

        modalClose.forEach((mc) => {
            mc.addEventListener('click', () => {
                modalViews.forEach((mv) => {
                    mv.classList.remove('active-modal');
                });
            });
        });

        // Clean up event listeners when the component is unmounted
        return () => {
            modalBtns.forEach((mb, i) => {
                mb.removeEventListener('click', () => {
                    modal(i);
                });
            });

            modalClose.forEach((mc) => {
                mc.removeEventListener('click', () => {
                    modalViews.forEach((mv) => {
                        mv.classList.remove('active-modal');
                    });
                });
            });
        };
    }, []);


    return <section className="activities section container" id='activities'>
        <div className="activities__bg">
            <h2 className="section__title-center activities__title">
                Các hoạt động nổi bật
            </h2>

            <div className="activities__container grid">
                {

                    initial.ativities.map((e: any) => (
                        <Fragment>
                            <div className="activities__card">
                                <div className='activities__card-frame'>
                                    <img className='activities__card-img' src={e.img} alt="" />
                                </div>
                                <h2 className="activities__card-title">{e.title}</h2>
                                <h3 className="activities__card-subtitle">{e.subtitle}</h3>
                                <a href={e.link} className="activities__card-button">
                                    Tìm hiểu thêm <i className="ri-arrow-right-line activities__icon"></i>
                                </a>
                            </div>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    </section>
}

export default activities