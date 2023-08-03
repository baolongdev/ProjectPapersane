import React, { useEffect, useRef, useState } from 'react';
import { Observable, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { TweenLite, Power1 } from 'gsap';
import { trian } from '../../../../store';
import "./Trian.css"

enum SquiggleState {
    ready,
    animating,
    ended
}

interface Position {
    x: number;
    y: number;
}

interface SquiggleSet {
    path: SVGPathElement;
    settings: SquiggleSettings;
}

interface SquiggleSettings {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    length?: number;
    sections: number;
    width?: number;
    chunkLength?: number;
    color?: string;
    progress?: number;
    opacity?: number;
}


function Trian() {
    const trianData = trian.trianData
    const trianDatalist = trian.trianDatalist
    const boxRef = useRef<HTMLDivElement | null>(null);
    const effectRef = useRef<HTMLDivElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const [boxHeight, setBoxHeight] = useState<number>(0);

    // class Squiggle {
    //     private grid: number;
    //     private stage: SVGSVGElement;
    //     private sqwig!: SVGPathElement;
    //     private sqwigs: SquiggleSet[] = [];
    //     private settings!: SquiggleSettings;
    //     public state: SquiggleState = SquiggleState.ready;

    //     constructor(stage: SVGSVGElement, settings: SquiggleSettings, grid: number) {
    //         this.grid = grid;
    //         this.stage = stage;

    //         settings.width = 0;
    //         settings.opacity = 1;

    //         this.state = SquiggleState.animating;
    //         let path = this.createLine(settings);
    //         let sqwigCount: number = 3;
    //         for (let i = 0; i < sqwigCount; i++) {
    //             this.createSqwig(i, sqwigCount, path, JSON.parse(JSON.stringify(settings)) as SquiggleSettings, i == sqwigCount - 1)
    //         }
    //     }

    //     createSqwig(index: number, total: number, path: string, settings: SquiggleSettings, forceWhite: boolean) {
    //         let sqwig = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    //         sqwig.setAttribute('d', path)
    //         sqwig.style.fill = 'none';
    //         sqwig.style.stroke = forceWhite ? '#303030' : this.getColor();
    //         sqwig.style.strokeLinecap = "round"

    //         settings.length = sqwig.getTotalLength();
    //         settings.chunkLength = settings.length / 6; //(settings.sections * 2) + (Math.random() * 40);
    //         settings.progress = settings.chunkLength;

    //         sqwig.style.strokeDasharray = `${settings.chunkLength}, ${settings.length + settings.chunkLength}`
    //         sqwig.style.strokeDashoffset = `${settings.progress}`

    //         this.stage.appendChild(sqwig);

    //         this.sqwigs.unshift({ path: sqwig, settings: settings });

    //         TweenLite.to(settings, settings.sections * 0.1, {
    //             progress: - settings.length,
    //             width: settings.sections * 0.9,
    //             ease: Power1.easeOut,
    //             delay: index * (settings.sections * 0.01),
    //             onComplete: () => {
    //                 if (index = total - 1) this.state = SquiggleState.ended;
    //                 sqwig.remove();
    //             }
    //         })
    //     }

    //     public update() {
    //         this.sqwigs.map((set: SquiggleSet) => {
    //             set.path.style.strokeDashoffset = `${set.settings.progress}`;
    //             set.path.style.strokeWidth = `${set.settings.width}px`;
    //             set.path.style.opacity = `${set.settings.opacity}`;
    //         })

    //     }

    //     private createLine(settings: SquiggleSettings): string {
    //         let x = settings.x;
    //         let y = settings.y;
    //         let dx = settings.directionX;
    //         let dy = settings.directionY;
    //         let path: string[] = [
    //             'M',
    //             '' + x,
    //             '' + y,
    //             "Q"
    //         ];

    //         let steps = settings.sections;
    //         let step = 0;
    //         let getNewDirection = (direction: string, goAnywhere: boolean) => {
    //             if (!goAnywhere && settings.directionX !== 0) return settings.directionX;
    //             return Math.random() < 0.5 ? -1 : 1;
    //         };

    //         while (step < steps * 2) {
    //             step++;
    //             x += (dx * (step / 30)) * this.grid;
    //             y += (dy * (step / 30)) * this.grid;
    //             if (step !== 1) path.push(',');
    //             path.push('' + x);
    //             path.push('' + y);

    //             if (step % 2 !== 0) {
    //                 dx = dx === 0 ? getNewDirection('x', step > 8) : 0;
    //                 dy = dy === 0 ? getNewDirection('y', step > 8) : 0;
    //             }
    //         }

    //         return path.join(' ');
    //     }

    //     private getColor(): string {
    //         let offset = Math.round(Math.random() * 100)
    //         var r = Math.sin(0.3 * offset) * 100 + 155;
    //         var g = Math.sin(0.3 * offset + 2) * 100 + 155;
    //         var b = Math.sin(0.3 * offset + 4) * 100 + 155;
    //         return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    //     }

    //     private componentToHex(c: number) {
    //         var hex = Math.round(c).toString(16);
    //         return hex.length == 1 ? "0" + hex : hex;
    //     }
    // }

    // class App {
    //     private container: HTMLElement;
    //     private svg: SVGSVGElement;
    //     private squiggles: Squiggle[] = [];

    //     private width: number = 600;
    //     private height: number = 600;

    //     private lastMousePosition: Position = { x: 0, y: 0 };
    //     private direction!: Position;

    //     private grid: number = 40;

    //     constructor(container: HTMLElement) {
    //         this.container = container;
    //         this.svg = svgRef.current as SVGSVGElement;
    //         this.onResize();

    //         this.tick();

    //         let input = new Input(this.container);

    //         input.moves.subscribe((position: Position) => {
    //             for (let i = 0; i < 3; i++) this.createSqwigFromMouse(position);
    //         })

    //         input.starts.subscribe((position: Position) => this.lastMousePosition = position)
    //         input.ends.subscribe((position: Position) => this.burst(true))

    //         if (location.pathname.match(/fullcpgrid/i)) setInterval(() => this.burst(false), 1000);

    //         new Observable((observer) => {
    //             const handleResize = () => {
    //                 this.onResize();
    //                 observer.next(); // Emit a value to signal the event
    //             };

    //             window.addEventListener("resize", handleResize);

    //             // Cleanup the event listener on unsubscription
    //             return () => {
    //                 window.removeEventListener("resize", handleResize);
    //             };
    //         }).subscribe();
    //     }

    //     burst(fromMouse: boolean = false) {
    //         for (let i = 0; i < 5; i++) this.createRandomSqwig(fromMouse);
    //     }

    //     createSqwigFromMouse(position: Position) {
    //         let sections: number = 4;
    //         if (this.lastMousePosition) {
    //             let newDirection: Position = { x: 0, y: 0 };
    //             let xAmount = Math.abs(this.lastMousePosition.x - position.x);
    //             let yAmount = Math.abs(this.lastMousePosition.y - position.y);

    //             if (xAmount > yAmount) {
    //                 newDirection.x = this.lastMousePosition.x - position.x < 0 ? 1 : -1;
    //                 sections += Math.round(xAmount / 4)
    //             }
    //             else {
    //                 newDirection.y = this.lastMousePosition.y - position.y < 0 ? 1 : -1;
    //                 sections += Math.round(yAmount / 4)
    //             }
    //             this.direction = newDirection;
    //         }

    //         if (this.direction) {
    //             let settings: SquiggleSettings = {
    //                 x: this.lastMousePosition.x,
    //                 y: this.lastMousePosition.y,
    //                 directionX: this.direction.x,
    //                 directionY: this.direction.y,
    //                 sections: sections > 20 ? 20 : sections
    //             }
    //             let newSqwig = new Squiggle(this.svg, settings, 10 + Math.random() * (sections * 1.5));
    //             this.squiggles.push(newSqwig);
    //         }

    //         this.lastMousePosition = position;
    //     }

    //     createRandomSqwig(fromMouse: boolean = false) {
    //         let dx = Math.random();
    //         if (dx > 0.5) dx = dx > 0.75 ? 1 : -1;
    //         else dx = 0;
    //         let dy = 0;
    //         if (dx == 0) dx = Math.random() > 0.5 ? 1 : -1;

    //         let settings: SquiggleSettings = {
    //             x: fromMouse ? this.lastMousePosition.x : this.width / 2, // Math.round(Math.random() * (this.width / this.grid))  * this.grid,
    //             y: fromMouse ? this.lastMousePosition.y : this.height / 2, //Math.round(Math.random() * (this.height / this.grid)) * this.grid,
    //             directionX: dx,
    //             directionY: dy,
    //             sections: 5 + Math.round(Math.random() * 15)
    //         }
    //         let newSqwig = new Squiggle(this.svg, settings, this.grid / 2 + Math.random() * this.grid / 2);
    //         this.squiggles.push(newSqwig);
    //     }

    //     onResize() {
    //         if (this.container && this.container.clientWidth && this.container.clientHeight) {
    //             this.width = this.container.clientWidth;
    //             this.height = this.container.clientHeight;

    //             this.svg.setAttribute('width', String(this.width));
    //             this.svg.setAttribute('height', String(this.height));
    //         }
    //     }

    //     tick() {
    //         let step = this.squiggles.length - 1;

    //         while (step >= 0) {
    //             if (this.squiggles[step].state != SquiggleState.ended) {
    //                 this.squiggles[step].update();

    //             }
    //             else {
    //                 // this.squiggles[step] = null;
    //                 this.squiggles.splice(step, 1);
    //             }

    //             --step;
    //         }

    //         requestAnimationFrame(() => this.tick());
    //     }
    // }

    // class Input {
    //     private mouseDowns: Observable<Position>;
    //     private mouseMoves: Observable<Position>;
    //     private mouseUps: Observable<Position>;

    //     private touchStarts: Observable<Position>;
    //     private touchMoves: Observable<Position>;
    //     private touchEnds: Observable<Position>;

    //     public starts: Observable<Position>;
    //     public moves: Observable<Position>;
    //     public ends: Observable<Position>;

    //     constructor(element: HTMLElement) {
    //         this.mouseDowns = fromEvent<MouseEvent>(element, "mousedown").pipe(map(this.mouseEventToCoordinate));
    //         this.mouseMoves = fromEvent<MouseEvent>(window, "mousemove").pipe(map(this.mouseEventToCoordinate));
    //         this.mouseUps = fromEvent<MouseEvent>(window, "mouseup").pipe(map(this.mouseEventToCoordinate));

    //         this.touchStarts = fromEvent<TouchEvent>(element, "touchstart").pipe(map(this.touchEventToCoordinate));
    //         this.touchMoves = fromEvent<TouchEvent>(element, "touchmove").pipe(map(this.touchEventToCoordinate));
    //         this.touchEnds = fromEvent<TouchEvent>(window, "touchend").pipe(map(this.touchEventToCoordinate));

    //         this.starts = merge(this.mouseDowns, this.touchStarts);
    //         this.moves = merge(this.mouseMoves, this.touchMoves);
    //         this.ends = merge(this.mouseUps, this.touchEnds);
    //     }

    //     private mouseEventToCoordinate = (mouseEvent: MouseEvent) => {
    //         mouseEvent.preventDefault();
    //         return {
    //             x: mouseEvent.clientX,
    //             y: mouseEvent.clientY
    //         };
    //     };

    //     private touchEventToCoordinate = (touchEvent: TouchEvent) => {
    //         touchEvent.preventDefault();
    //         return {
    //             x: touchEvent.changedTouches[0].clientX,
    //             y: touchEvent.changedTouches[0].clientY
    //         };
    //     };
    // }

    // let container = effectRef.current as HTMLElement;
    // if (container) {
    //     let app = new App(container);
    // }


    // useEffect(() => {
    //     if (boxRef.current) {
    //         const boxElement = boxRef.current;

    //         // Function to update dimensions
    //         const updateDimensions = () => {
    //             setBoxWidth(boxElement.clientWidth);
    //             setBoxHeight(boxElement.clientHeight);
    //         };

    //         // Initial update of dimensions
    //         updateDimensions();

    //         // Add event listener for window resize
    //         window.addEventListener('resize', updateDimensions);

    //         // Clean up the event listener when component unmounts
    //         return () => {
    //             window.removeEventListener('resize', updateDimensions);
    //         };
    //     }
    // }, [boxRef]);

    useEffect(() => {
        if (effectRef.current && boxWidth && boxHeight) {
            const effectElement = effectRef.current;

            // Set the width and height of the effectRef element to match the boxRef dimensions
            effectElement.style.width = `${boxWidth}px`;
            effectElement.style.height = `${boxHeight}px`;
        }
    }, [boxWidth, boxHeight]);

    return <section className="trian section" id="trian">
        {/* <div ref={boxRef} className="trian__box">
            <div ref={effectRef} className="trian__effect">
                <svg ref={svgRef} id="stage" width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
            </div> */}
        <div className="trian_container container">
            <div className="trian__card">
                <h1 className="card__title"> GIỚI THIỆU WEBSITE <br />ĐOÀN TRƯỜNG THPT CHUYÊN TRẦN ĐẠI NGHĨA</h1>
                <p className="card__description"> Website Đoàn trường THPT chuyên Trần Đại Nghĩa được thành lập bởi đội hình chuyên Công dân số thuộc Chiến dịch tình nguyện hè Hoa Phượng Đỏ năm 2023 là một môi trường lành mạnh cho Đoàn viên, thanh niên tìm hiểu về vai trò, sứ mệnh, các giá trị học hiệu cũng như các hoạt động của Đoàn trường và các Câu lạc bộ - Dự án trực thuộc. </p>
                <h1 className="card__title2"> GIỚI THIỆU NHÀ SÁNG LẬP </h1>

                <div className="card__container">
                    {
                        trianData.map((data, i) => (
                            <article key={i} className="card__article">
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
            </div>
            <p className="card__support">
                <span className="card__support-bold">
                    Và các bạn chiến sĩ thuộc đội hình chuyên Công dân số:
                </span>
                Anh Thư (CH 2124), Quỳnh Vy (CA2 2225), Gia Huy (TH3 2124), Linh Mai (CA2 2225), Vy An (CH 2124), Phương Linh (CH 2124), Hoàng Thư (CH 2124)</p>
        </div>
    </section>
    // </div >

}

export default Trian
