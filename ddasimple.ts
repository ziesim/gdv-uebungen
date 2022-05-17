function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the DDA algorithm.
 * @param  {Array.<number>} data   - The linearised pixel array
 * @param  {Array.<number>} pointA - The start point of the line
 * @param  {Array.<number>} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function ddaSimple(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {
    let pAx = Math.round(pointA[0]);
    let pAy = Math.round(pointA[1]);
    let pBx = Math.round(pointB[0]);
    let pBy = Math.round(pointB[1]);

    setPixel(data, pAx, pAy, width, height);
    setPixel(data, pBx, pBy, width, height);

    let m = (pBy - pAy) / (pBx - pAx);

    for (let x = 1; x < (pBx - pAx); x++) {
        setPixel(data, pAx + x, pAy + Math.round(m * x), width, height);
    }

    // TODO: Calculcate the slope m for a line from pointA to pointB.
    // TODO: In this example, the main direction of the line is the x-direction.
    // TODO: Go from the x-coordinate of pointA (pointA[0]) to the x-coordinate of pointB (pointB[0]) and calculate the y-coordinate of the pixels in between.
}

