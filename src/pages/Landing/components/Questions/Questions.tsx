import React, { useEffect } from 'react'
import './Questions.css'
function Questions({ initial }: any) {
    useEffect(() => {
        const accordionItems = document.querySelectorAll('.questions__item');

        const toggleItem = (item: any) => {
            const accordionContent = item.querySelector('.questions__content');

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
            const accordionHeader = item.querySelector('.questions__header');

            accordionHeader?.addEventListener('click', handleAccordionClick);
        });

        return () => {
            accordionItems.forEach((item) => {
                const accordionHeader = item.querySelector('.questions__header');

                accordionHeader?.removeEventListener('click', handleAccordionClick);
            });
        };
    }, []); // empty dependency array to run the effect only once


    return <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
            Một số câu hỏi phổ biến<br />thường được hỏi
        </h2>

        <div className="questions__container container grid">


            <div className="questions__group">
                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            My flowers are falling off or dying?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            What causes leaves to become pale?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            What causes brown crispy leaves?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>
            </div>

            <div className="questions__group">
                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            How do i choose a plant?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            How do I change the pots?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>

                <div className="questions__item">
                    <header className="questions__header">
                        <i className="ri-add-line questions__icon"></i>
                        <h3 className="questions__item-title">
                            Why are gnats flying around my plant?
                        </h3>
                    </header>

                    <div className="questions__content">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your
                            space but which planet is for you. Choosing the right plant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Questions