import { swapBuffers } from './setup-circlesimple';

/**
 * Determines the color of a pixel (x, y) to create
 * a circle and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 * @param radius The radius of the circle
 */
export function circleSimple(data: Uint8ClampedArray, x: number, y: number, cx: number, cy: number, width: number, height: number, radius: number) {
    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;

    let r = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    let color;

    if (r < radius) {
        color = 0;
    } else {
        color = 255;
    }

    data[red] = color;
    data[green] = color;
    data[blue] = color;
    data[alpha] = 255;

    // TODO: Imagine a circle with center (cx, cy) and given radius. Check if pixel (x, y) is inside this circle or not. Set the pixel color accordingly in the pixel array 'data'.
}

