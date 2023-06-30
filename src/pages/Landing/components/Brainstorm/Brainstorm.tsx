import React, { useEffect, useRef } from 'react'
import './Brainstorm.css'
function Brainstorm({ initial }: any) {
    const svgRef = useRef(null);
    useEffect(() => {
        const brainstorm = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
        });

        brainstorm.reveal('.brainstorm__container', { interval: 100 });
        // Clean up the ScrollReveal instance
        return () => {
            brainstorm.destroy();
        };
    }, []);
    return <section className="brainstorm section container" id="brainstorm">
        <h2 className="section__title-center brainstorm__title">
            Core Values
        </h2>
        <div className="brainstorm__container">
            <object
                id='brainstorm__svg'
                type="image/svg+xml"
                data="/Brainstorm.svg"
                className='brainstorm__img'
                ref={svgRef}
            />
        </div>

    </section>
}

export default Brainstorm