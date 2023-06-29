import React, { useEffect } from 'react'
import './Lehoiamnhac.css'



function Lehoiamnhac() {
    return <section className='lhan' id='lhan'>
        <div className="lhan__header">
            <h1 className="lhan__title">Lễ hội âm nhạc</h1>
        </div>
        <div className="lhan__container container">
            <div className="lhan__data grid">
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
                <a target='_blank' className={`lhan__card`}>
                    <img src="/activities1.jpg" alt="" className="lhan__img" />
                </a>
            </div>
        </div>
        <div className="lhan__footer">
            <img src="/piano.png" className='lhan__footer-img' alt="" />
            {/* <h1 className="lhan__title">Lễ hội âm nhạc</h1> */}
        </div>
    </section>
}

export default Lehoiamnhac