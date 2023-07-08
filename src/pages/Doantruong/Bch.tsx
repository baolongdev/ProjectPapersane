import React, { Fragment } from 'react'
import './Bch.css'
function bch() {
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
            <div className="bch__container container grid">

            </div>
        </section>
    </Fragment>
}

export default bch