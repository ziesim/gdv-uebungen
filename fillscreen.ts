import { swapBuffers } from './setup-fillscreen';

/**
 * Determines the color of a pixel (x, y)
 * and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function fillscreen(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {
    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;
    data[red] = 255;
    data[green] = 0;
    data[blue] = 0;
    data[alpha] = 255;
    // TODO: Compute the position of pixel (x, y) in the linearised 'data' array. Each pixel is using 4 bytes in the data array, one each for red, green, blue and alpha.
    // TODO:  Set the red and alpha component of pixel (x, y) to maximum (255).
}

