const calcLerp = (x1 : number, y1 : number, x2 : number, y2 : number) => {
    const m : number = (y2 - y1) / (x2 - x1)
    const b : number = y1 - m * x1
    return (x0 : number) => x0 * m + b
}

export default calcLerp