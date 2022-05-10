/**
 * Posterise the source image and save the result in the target image.
 * Restrict each color channel to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantiseColor(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {
    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;

    let y1 = 0.2126729;
    let y2 = 0.7151522;
    let y3 = 0.0721750;

    let redintensity = Math.floor((source[red] * y1 + source[red] * y2 + source[red] * y3) / 64) * 85;
    let greenintensity = Math.floor((source[green] * y1 + source[green] * y2 + source[green] * y3) / 64) * 85;
    let blueintensity = Math.floor((source[blue] * y1 + source[blue] * y2 + source[blue] * y3) / 64) * 85;

    target[red] = redintensity;
    target[green] = greenintensity;
    target[blue] = blueintensity;
    target[alpha] = 255;

    // TODO: Limit the brightness of each color channel to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array accordingly.
    // TODO:
}

