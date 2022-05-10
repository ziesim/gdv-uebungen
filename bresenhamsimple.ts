 function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the Bresenham algorithm.
 * @param  {Uint8ClampedArray} data   - The linearised pixel array
 * @param  {[number, number]} pointA - The start point of the line
 * @param  {[number, number]} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function bresenhamSimple(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {
    let pAx = Math.round(pointA[0]);
    let pAy = Math.round(pointA[1]);
    let pBx = Math.round(pointB[0]);
    let pBy = Math.round(pointB[1]);

    setPixel(data, pAx, pAy, width, height);
    setPixel(data, pBx, pBy, width, height);

    let deltaX = (pBx - pAx);
    let deltaY = (pBy - pAy);
    let eps = 2 * deltaY - deltaX;
    let y = pAy;

    for (let x = 1; x < (pBx - pAx); x++) {
        setPixel(data, pAx + x, y, width, height);
        if (eps <= 0) {
            eps = eps + 2 * deltaY;
        } else {
            eps = eps + (2 * deltaY - 2 * deltaX);
            y += 1;
        }
    }
    
    // TODO: 1. Calculate dx and dy and set the start position x and y
    // TODO: 2. Calculate the initial epsilon of the bresenham algorithm
    // TODO: 3. Go from pointA[0] to pointB[0], and update epsilon in each step as given in the bresenham algorithm. Increase y when necessary.
}

