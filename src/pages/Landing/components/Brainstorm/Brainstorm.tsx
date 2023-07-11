import React, { useEffect, useRef } from 'react'
import './Brainstorm.css'
function Brainstorm({ initial }: any) {

    useEffect(() => {
        let draggableObjects;
        let dropPoints;
        let steps = 0
        const startBtn = document.getElementById("start") as HTMLElement;
        const result = document.getElementById("result") as HTMLElement;
        const controls = document.querySelector(".brainstorm__controls") as HTMLElement
        const dragContainer = document.querySelector(".brainstorm__draggable-objects") as HTMLElement
        const dropContainer = document.querySelector(".brainstorm__drop-points") as HTMLElement
        const data = [
            "MULTILINGUALISM",
            "RESEARCH-SKILLS",
            "COMPABILITY",
            "HEALTH-AWARENESS",
            "COMMUNITY-ORIENTATION",
            "GLOBAL-INTERACTION"
        ]

        let deviceType = "";
        let initialX = 0,
            initialY = 0;
        let currentElement: EventTarget | null = null;
        let moveElement = false;

        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                deviceType = "touch";
                return true;
            } catch (e) {
                deviceType = "mouse";
                return false;
            }
        }

        let count = 0;
        const randomValueGenerator = () => {
            return data[Math.floor(Math.random() * data.length)]
        }

        const stopGame = () => {
            controls.classList.remove("hide");
            startBtn.classList.remove("hide");
        }

        function dragStart(e: Event) {
            if (isTouchDevice()) {
                initialX = (e as TouchEvent).touches[0].clientX;
                initialY = (e as TouchEvent).touches[0].clientY;
                moveElement = true;
                currentElement = e.target;
            } else {
                (e as any).dataTransfer.setData("text", (e.target as HTMLElement).id);
            }
        }

        function dragOver(e: Event) {
            e.preventDefault();
        }

        const touchMove = (e: Event | MouseEvent | TouchEvent) => {
            if (moveElement) {
                e.preventDefault();
                let newX = (e as TouchEvent).touches[0].clientX;
                let newY = (e as TouchEvent).touches[0].clientY;
                let currentSelectedElement = document.getElementById((e.target as HTMLElement).id) as HTMLElement;
                (currentSelectedElement.parentElement as HTMLElement).style.top = (currentSelectedElement.parentElement as HTMLElement).offsetTop - (initialY - newY) + "px";
                (currentSelectedElement.parentElement as HTMLElement).style.left = (currentSelectedElement.parentElement as HTMLElement).offsetLeft - (initialX - newX) + "px";
                initialX = newX;
                initialY = newY;
            }
        }

        const drop = (e: Event) => {
            e.preventDefault();
            if (isTouchDevice()) {
                moveElement = false;
                const currentDrop = document.querySelector(`div[data-id='${(e.target as HTMLElement).id}']`) as HTMLElement
                const currentDropBound = currentDrop.getBoundingClientRect();
                if (
                    initialX >= currentDropBound.left &&
                    initialX <= currentDropBound.right &&
                    initialY >= currentDropBound.top &&
                    initialY <= currentDropBound.bottom
                ) {
                    currentDrop.classList.add("dropped");
                    (currentElement as HTMLElement).classList.add("hide");
                    currentDrop.innerHTML = ``;
                    currentDrop.insertAdjacentHTML(
                        "afterbegin",
                        `<img src= "/brainstorm/${(currentElement as HTMLElement).id}.png">`
                    );
                    count += 1;
                }
            } else {
                const draggedElementData = (e as any).dataTransfer.getData("text");
                const droppableElementData = (e.target as HTMLElement).getAttribute("data-id");
                if (draggedElementData === droppableElementData) {
                    const draggedElement = document.getElementById(draggedElementData) as HTMLElement;
                    //dropped class
                    (e.target as HTMLElement).classList.add("dropped");
                    //hide current img
                    draggedElement.classList.add("hide");
                    //draggable set to false
                    draggedElement.setAttribute("draggable", "false");
                    (e.target as HTMLElement).innerHTML = ``;
                    //insert new img
                    (e.target as HTMLElement).insertAdjacentHTML(
                        "afterbegin",
                        `<img src="/brainstorm/${draggedElementData}1.png" test>`
                    );
                    count += 1;
                } else {
                    steps++
                    console.log(steps);
                }
            }
            if (count == 6) {
                result.innerHTML = `You Won! <br/> số lần sai: ${steps}`;
                startBtn.innerText = "Restart Game"
                dragContainer.classList.add("hide")
                stopGame();
            }
        }

        const creator = () => {
            dragContainer.innerHTML = "";
            dropContainer.innerHTML = "";
            let randomData: string[] = [];
            //for string random values in array
            for (let i = 1; i <= 6; i++) {
                let randomValue = randomValueGenerator();
                if (!randomData.includes(randomValue)) {
                    randomData.push(randomValue);
                } else {
                    //If value already exists then decrement i by 1
                    i -= 1;
                }
            }
            for (let i of randomData) {
                const flagDiv = document.createElement("div");
                flagDiv.classList.add("brainstorm__draggable-image");
                flagDiv.setAttribute("draggable", "true");
                if (isTouchDevice()) {
                    flagDiv.style.position = "absolute";
                }
                flagDiv.innerHTML = `<img src="/brainstorm/${i}.png" id="${i}">`;
                dragContainer.appendChild(flagDiv);
            }
            //Sort the array randomly before creating country divs
            randomData = randomData.sort(() => 0.5 - Math.random());
            for (let i of randomData) {
                const countryDiv = document.createElement("div");
                countryDiv.innerHTML = `<div class='brainstorm__card' data-id='${i}'>
                                        ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", " ")}
                                        </div>
                `;
                dropContainer.appendChild(countryDiv);
            }
        };
        //Start Game
        startBtn.addEventListener("click", async () => {
            currentElement = null;
            controls.classList.add("hide");
            startBtn.classList.add("hide");
            dragContainer.classList.remove("hide")
            //This will wait for creator to create the images and then move forward
            await creator();
            count = 0;
            dropPoints = document.querySelectorAll(".brainstorm__card");
            draggableObjects = document.querySelectorAll(".brainstorm__draggable-image");
            //Events
            draggableObjects.forEach((element) => {
                element.addEventListener("dragstart", dragStart);
                //for touch screen
                element.addEventListener("touchstart", dragStart);
                element.addEventListener("touchend", drop);
                element.addEventListener("touchmove", touchMove);
            });
            dropPoints.forEach((element) => {
                element.addEventListener("dragover", dragOver);
                element.addEventListener("drop", drop);
            });
        });





    }, [])

    return <section className="brainstorm" id="brainstorm">
        <div className="brainstorm__data">
            <h1 className="brainstorm__title">
                6 giá trị học hiệu
            </h1>
        </div>
        <div className="brainstorm__controls">
            <button className="brainstorm__start" id="start"> Start Game </button>
            <p className="brainstorm__result" id="result"></p>
        </div>
        <div className="brainstorm__container container">
            <div className="brainstorm__draggable-objects"></div>
            <div className="brainstorm__drop-points"></div>

        </div>

    </section>
}

export default Brainstorm