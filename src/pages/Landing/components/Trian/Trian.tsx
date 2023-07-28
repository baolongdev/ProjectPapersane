import React, { useEffect, useRef } from 'react';

import { trian } from '../../../../store';
import "./Trian.css"


interface Ball {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    update: () => void;
    draw: () => void;
}

interface Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
    lineWidth: number;
    update: () => void;
    draw: () => void;
}

const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];


function Trian() {
    const trianData = trian.trianData
    const trianDatalist = trian.trianDatalist
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const card = cardRef.current; // Get the .trian__card element

            // Set canvas dimensions to match .trian__card dimensions
            canvas.width = card?.clientWidth || 0;
            canvas.height = card?.clientHeight || 0;

            let ballsArray: Ball[] = [];
            let circlesArray: Circle[] = [];

            function Balls(this: Ball, x: number, y: number) {

                this.x = x;
                this.y = y;
                this.radius = 20;
                this.color = colors[Math.round(Math.random() * colors.length)];

                //Speed of moving the balls position
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;

                this.update = () => {
                    //If conditions are used to show a classic effect of balls
                    if (this.radius >= 10) {
                        this.x += this.speedX * 5;
                        this.y += this.speedY * 5;
                    }
                    if (this.radius <= 9) {
                        this.x += this.speedX * 2;
                        this.y += this.speedY * 2;
                    }
                    if (this.radius > 4) {
                        this.radius -= .7;
                    }
                    if (this.radius < 4) {
                        this.radius -= .2;
                    }
                }

                //Draw to render the balls on the canvas
                this.draw = () => {
                    if (context) {
                        console.log(context);
                        context.fillStyle = this.color;
                        context.beginPath();
                        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                        context.fill();
                    }
                };
            }

            //Function to render all the balls in the ball array
            function renderBalls() {
                for (let i = 0; i < ballsArray.length; i++) {
                    ballsArray[i].draw();
                    ballsArray[i].update();
                    //Slice the ball when ball radius is less then .1
                    if (ballsArray[i].radius <= .1) {
                        ballsArray.splice(i, 1);
                        i--;
                    }
                }
            }

            function Circle(this: Circle, x: number, y: number) {
                this.x = x;
                this.y = y;
                this.radius = 1;
                this.color = `rgba(255,255,255,.3)`;
                //Circle stroke
                this.lineWidth = 2;

                this.update = () => {
                    //If Condition for classic circle effect
                    if (this.radius < 60) {
                        this.radius += 10
                    }
                    if (this.radius > 60) {
                        this.radius += 2;
                        this.color = `rgba(255,255,255,.1)`;
                    }
                }

                this.draw = () => {
                    if (context) {
                        context.strokeStyle = this.color;
                        context.beginPath();
                        context.lineWidth = this.lineWidth;
                        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                        context.stroke();
                    }
                }
            }

            //Render function for circles to render all the circles in the circle array
            function renderCircles() {
                for (let i = 0; i < circlesArray.length; i++) {
                    circlesArray[i].draw();
                    circlesArray[i].update();
                    if (circlesArray[i].radius >= 100) {
                        circlesArray.splice(i, 1);
                        i--;
                    }
                }
            }

            //Animate Function
            function animate() {
                if (context) {
                    context.fillStyle = `rgba(255, 255, 255, 1)`;
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    renderBalls();
                    renderCircles();
                    requestAnimationFrame(animate);
                }
            }

            let mouseX = 0;
            let mouseY = 0;

            canvas.addEventListener('click', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                circlesArray.push(new (Circle as any)(mouseX, mouseY)); // Type assertion as any
                // Push 20 Balls in the array and render on the canvas
                for (let i = 0; i < 20; i++) {
                    ballsArray.push(new (Balls as any)(mouseX, mouseY)); // Type assertion as any
                }
            });



            // ... (rest of the functions and animate function)

            // Always call the animate function at the bottom of the code!
            animate();
        }
    }, []);


    return <div ref={cardRef} className="trian__box">
        <canvas id="canvas" ref={canvasRef}></canvas>
        <section className="trian section container" id="trian">
            <div className="trian__card">
                <h1 className="card__title"> OUR TEAM</h1>
                <div className="card__container">
                    {
                        trianData.map((data, i) => (
                            <article className="card__article">
                                <div className="card__data">
                                    <h1 className="card__mission">{data.mission}</h1>
                                    <img src={`./trian/${data.id}.jpg`} alt="card image" className="card__img" />
                                    {/* <h1 className="card__name">{
                                        data.title.split('/').map((part, index) => (
                                            <React.Fragment key={index}>
                                                {part}
                                                {index !== data.title.split('/').length - 1 && <br />}
                                            </React.Fragment>
                                        ))
                                    }</h1> */}
                                    <h1 className="card__name">{data.title}</h1>
                                    <p className="card__description">{data.aboutTitle}</p>
                                </div>
                            </article>
                        ))
                    }
                </div>
                <h1 className="card__title2"> Các cá nhân đã hỗ trợ</h1>
                <p className="card__support"> Anh Thư (CH 2124), Quỳnh Vy (CA2 2225), Gia Huy (TH3 2124), Linh Mai (CA2 2225), Vy An (CH 2124), Phương Linh (CH 2124), Hoàng Thư (CH 2124)</p>
                {/* <div className='trian__box'>
                    {
                        trianDatalist.map((data, i) => (
                            <h1 className="card__mission">{data.name} - {data.class}</h1>
                        ))
                    }
                </div> */}
            </div>
        </section>
    </div>

}

export default Trian
