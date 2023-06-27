import React, { useEffect } from 'react'
import './CLB_DA.css'
function CLB_DA({ initial }: any) {
    useEffect(() => {
        const accordionItems = document.querySelectorAll('.clbdas__item');

        const toggleItem = (item: any) => {
            const accordionContent = item.querySelector('.clbdas__content');

            if (item.classList.contains('accordion-open')) {
                accordionContent.removeAttribute('style');
                item.classList.remove('accordion-open');
            } else {
                accordionContent.style.height = accordionContent.scrollHeight + 'px';
                item.classList.add('accordion-open');
            }
        };

        const handleAccordionClick = (e: any) => {
            const item = e.currentTarget.parentNode;
            const openItem = document.querySelector('.accordion-open');

            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        };

        accordionItems.forEach((item) => {
            const accordionHeader = item.querySelector('.clbdas__header');

            accordionHeader?.addEventListener('click', handleAccordionClick);
        });

        return () => {
            accordionItems.forEach((item) => {
                const accordionHeader = item.querySelector('.clbdas__header');

                accordionHeader?.removeEventListener('click', handleAccordionClick);
            });
        };
    }, []); // empty dependency array to run the effect only once


    return <section className="clbdas section" id="faqs">
        <h2 className="section__title-center clbdas__title container">
            Thông tin <br /> CLB/DA
        </h2>

        <div className="clbdas__container container grid">


            <div className="clbdas__group">
                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            My flowers are falling off or dying?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            What causes leaves to become pale?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            What causes brown crispy leaves?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>
            </div>

            <div className="clbdas__group">
                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            How do i choose a plant?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            How do I change the pots?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="clbdas__item">
                    <header className="clbdas__header">
                        <i className="ri-add-line clbdas__icon"></i>
                        <h3 className="clbdas__item-title">
                            Why are gnats flying around my plant?
                        </h3>
                    </header>

                    <div className="clbdas__content">
                        <p className="clbdas__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default CLB_DA