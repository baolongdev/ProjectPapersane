import React, { Fragment } from 'react'
import './Bch.css'
import bch2223 from './bch2223'
function bch() {
    console.log(bch2223[0].name);

    return <Fragment>
        <div className="bch__return-box"
            onClick={() => {
                window.history.back();
            }}
        // ref={btnReturnRef}
        >
            <i className="ri-arrow-left-line bch__return button--flex" />
        </div>
        <section className="bch" id='bch'>

            <div className="bch__data">
                <div className="bch__data-img">
                    <img src="/LogoDoan.png" alt="" />
                </div>
                <div className="bch__data-text">
                    <h1 className="bch__title">
                        Ban chấp hành <br /> đoàn trường
                    </h1>
                    <p className="bch__subtitle">
                        Nhiệm kì 2022 - 2023
                    </p>
                </div>
            </div>
            <div className="bch__container grid">
                <div className='bch__leader'>
                    {
                        [...Array(2)].map((_, i) => (
                            <div key={i} className='bch__card'>
                                <div className="bch__card-img">
                                    <img src={`/bch/bch2223/${i + 1}.jpg`} alt="" className="bch__img" />
                                </div>
                                <h2 className='bch__card-title'>{bch2223[i].name + "-" + bch2223[i].class}</h2>
                                <h3 className='bch__card-subtitle'>{bch2223[i].job}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className='bch__teams gridCol__3'>
                    {
                        [...Array(3)].map((_, i) => (
                            <div key={i} className='bch__card'>
                                <div className="bch__card-img">
                                    <img src={`/bch/bch2223/${i + 3}.jpg`} alt="" className="bch__img" />
                                </div>
                                <h2 className='bch__card-title'>{bch2223[i + 2].name + "-" + bch2223[i + 2].class}</h2>
                                <h3 className='bch__card-subtitle'>{bch2223[i + 2].job}</h3>
                            </div>
                        ))
                    }

                </div>
                <div className='bch__teams gridCol__4'>
                    {
                        [...Array(8)].map((_, i) => (
                            <div key={i} className='bch__card'>
                                <div className="bch__card-img">
                                    <img src={`/bch/bch2223/${i + 6}.jpg`} alt="" className="bch__img" />
                                </div>
                                <h2 className='bch__card-title'>{bch2223[i + 5].name + "-" + bch2223[i + 5].class}</h2>
                                <h3 className='bch__card-subtitle'>{bch2223[i + 5].job}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </Fragment>
}

export default bch