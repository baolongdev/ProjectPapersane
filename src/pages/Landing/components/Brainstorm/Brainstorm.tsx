import React, { useEffect, useRef } from 'react'
import './Brainstorm.css'
function Brainstorm({ initial }: any) {

    useEffect(() => {
        const IMAGE__COUNT = 6

        const moves = document.querySelector('.brainstorm__moves') as HTMLElement
        const container = document.querySelector(".brainstorm__game") as HTMLElement
        const startButton = document.querySelector("#brainstorm__start-button") as HTMLElement
        const coverScreen = document.querySelector(".brainstorm__cover-screen") as HTMLElement
        const result = document.querySelector(".brainstorm__result") as HTMLElement
        let checkWin = false
        let currentElement = ""
        let movesCount = 0,
            imagesArr = [] as Array<number>
        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                return true
            } catch (e) {
                return false
            }
        }
        const randomNumber = () => (Math.floor(Math.random() * (IMAGE__COUNT - 1)) + 1) as number
        const getCoords = (element: HTMLElement) => {
            const [row, col] = element.getAttribute("data-positon")?.split("_") as string[]
            return [parseInt(row), parseInt(col)]

        }
        const checkAdjacent = (row1: number, row2: number, col1: number, col2: number) => {
            if (row1 == row2) {
                if (col2 == col1 - 1 || col2 == col1 + 1) {
                    return true;
                }
            } else if (col1 == col2) {
                if (row2 == row1 - 1 || row2 == row1 + 1) {
                    return true;
                }
            }
            return false;
        }
        const randowImages = () => {
            while (imagesArr.length < (IMAGE__COUNT - 1)) {
                let randomVal = randomNumber();
                if (!imagesArr.includes(randomVal)) {
                    imagesArr.push(randomVal);
                }
            }
            imagesArr.push(IMAGE__COUNT);
        }
        const gridGenerator = () => {
            let count = 0;
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    let div = document.createElement("div");
                    div.setAttribute("data-positon", `${i}_${j}`);
                    div.addEventListener("click", selectImage);
                    div.classList.add("image-container");
                    div.innerHTML = `<img src="/brainstorm/${imagesArr[count]}.png" class="image ${imagesArr[count] == IMAGE__COUNT ? "target hide" : ""}" data-index="${imagesArr[count]}" position="${imagesArr[count]}"/>`
                    count++;
                    container?.appendChild(div);
                }
            }
        }
        const checkPosition = () => {
            let positionAttributes = '';
            (document.querySelectorAll("[position]") as NodeListOf<HTMLElement>).forEach((element: HTMLElement) => {
                const position = element.getAttribute("position") as string;
                positionAttributes += position;
            });
            return positionAttributes;
        };
        const selectImage = (e: Event) => {
            e.preventDefault();
            const currentElement = e.target as HTMLElement;
            const targetElement = document.querySelector(".target") as HTMLElement;
            const currentParent = currentElement.parentElement as HTMLElement;
            let targetParent = targetElement.parentElement as HTMLElement;
            const [row1, col1] = getCoords(currentParent)
            const [row2, col2] = getCoords(targetParent)
            console.log(currentElement.getAttribute("data-index") as string);

            if (checkAdjacent(row1, row2, col1, col2) && !checkWin) {

                currentElement.remove();
                targetElement.remove();
                let currentIndex = parseInt(currentElement.getAttribute("data-index") as string)
                let targetIndex = parseInt(targetElement.getAttribute("data-index") as string)

                currentElement.setAttribute("data-index", String(targetIndex))
                targetElement.setAttribute("data-index", String(currentIndex))

                currentParent.appendChild(targetElement)
                targetParent.appendChild(currentElement)

                let currentArrIndex: number = imagesArr.indexOf(currentIndex);
                let targetArrIndex: number = imagesArr.indexOf(targetIndex);
                console.log(imagesArr);
                [imagesArr[currentArrIndex], imagesArr[targetArrIndex]] = [
                    imagesArr[targetArrIndex],
                    imagesArr[currentArrIndex],
                ];
                console.log(imagesArr);


                if (imagesArr.join("") == "123456" || checkPosition().toString() == "123456") {
                    console.log("win");
                    setTimeout(() => {
                        checkWin = true
                        moves.innerText = `Total Moves: ${movesCount}`
                        startButton.innerText = "RestartGame";
                        (document.querySelector(".image-container>.target") as HTMLElement).classList.remove("hide")
                    }, 1000)
                }
                movesCount += 1;
                moves.innerText = `Moves: ${movesCount}`

            }
        }

        startButton?.addEventListener("click", () => {
            startButton.innerText = "Start Game"
            container.innerHTML = ""
            imagesArr = []
            randowImages()
            gridGenerator()
            movesCount = 0
            checkWin = false
            moves.innerText = `Moves ${movesCount}`;
        });

        window.onload = () => {
            // coverScreen.classList.remove("hide")
            // container.classList.add("hide")
        }

    }, [])

    return <section className="brainstorm" id="brainstorm">
        <div className="brainstorm__data">
            <h1 className="brainstorm__title">
                6 giá trị <br /> học hiệu
            </h1>
        </div>
        <div className="brainstorm__container container grid">
            <div className="brainstorm__cover-screen">
                <p className="brainstorm__result"></p>
                <button id="brainstorm__start-button">Start Game</button>
            </div>
            <div className="brainstorm__moves"></div>
            <div className="brainstorm__slider-game">
                <div className="brainstorm__game"></div>
            </div>
        </div>
    </section>
}

export default Brainstorm