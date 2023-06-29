import React, { useEffect, useState } from 'react'
import mixitup from 'mixitup';

import './CLB_DA.css'
function CLB_DA({ initial }: any) {
    useEffect(() => {
        let mixerPortfolio = mixitup('.clbdas__container', {
            selectors: {
                target: ".clbdas__card"
            },
            animation: {
                duration: 300,
                nudge: true,
                reverseOut: true,
                effects: "fade scale(0.01)"
            }
        })
        // Clean up the MixItUp instance when the component unmounts
        return () => {
            mixerPortfolio.destroy();
        };
    }, [])
    useEffect(() => {
        const linkClbdas = document.querySelectorAll('.clbdas__item');

        function activeCladas(event: any) {
            linkClbdas.forEach((l) => l.classList.remove('active-clbdas'));
            event.target.classList.add('active-clbdas');
        }

        linkClbdas.forEach((l) => l.addEventListener('click', activeCladas));

        // Clean up the event listeners when the component unmounts
        return () => {
            linkClbdas.forEach((l) => l.removeEventListener('click', activeCladas));
        };
    }, []);

    const [scroll, setScroll] = useState(0);
    const handlePrevClick = () => {
        setScroll((prevScroll) => {
            if (prevScroll - 100 < 0) {
                return 0;
            } else {
                return prevScroll - 100
            }
        });
    };
    const handleNextClick = () => {
        setScroll((prevScroll) => {
            const slider = document.querySelector('.clbdas__slider') as HTMLElement,
                sliderWidth = slider.offsetWidth;
            console.log(prevScroll);

            if (prevScroll + 100 > sliderWidth) {
                return sliderWidth + 200;
            } else {
                return prevScroll + 100
            }
        });
    };

    useEffect(() => {
        const slider = document.querySelector('.clbdas__slider');
        if (slider) {
            slider.scrollLeft = scroll;
        }
    }, [scroll]);

    return <section className="clbdas section" id="clbda">
        <h2 className="section__title-center clbdas__title container">
            CÂU LẠC BỘ - DỰ ÁN
        </h2>
        <div className='clbdas__filters'>
            <button
                onClick={handlePrevClick}
                className='button button--flex clbdas__filters-btn'
                id='prev-btn'
            >
                <i className="ri-arrow-left-s-line clbdas__filters-icon"></i>
            </button>
            <div className='clbdas__slider'>
                <span className="clbdas__item active-clbdas" data-filter="all">Tất cả</span>
                <span className="clbdas__item" data-filter=".vh">Văn hóa</span>
                <span className="clbdas__item" data-filter=".knnt">Kỹ năng - nghệ thuật</span>
                <span className="clbdas__item" data-filter=".httt">Học thuật - thông tin</span>
                <span className="clbdas__item" data-filter=".khxhda">Khoa học xã hội - dự án</span>
            </div>
            <button
                onClick={handleNextClick}
                className='button button--flex clbdas__filters-btn'
                id='next-btn'>
                <i className="ri-arrow-right-s-line clbdas__filters-icon"></i>
            </button>
        </div>
        <div className="clbdas__container container grid">
            {
                initial.clb_da.map((data: any) => (
                    <a href={data.link} target='_blank' className={`clbdas__card mix ${data.tag}`}>
                        <img src={data.img} alt="" className="clbdas__img" />
                    </a>
                ))
            }
        </div>
    </section>
}

export default CLB_DA