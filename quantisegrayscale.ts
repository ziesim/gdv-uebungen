/**
 * Posterise the source image and save the result in the target image.
 * Restrict the amount of used brightness levels to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantisegrayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {
    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;

    let y1 = 0.2126729;
    let y2 = 0.7151522;
    let y3 = 0.0721750;

    let intensity = Math.floor((source[red] * y1 + source[green] * y2 + source[green] * y3) / 64) * 85;

    target[red] = intensity;
    target[green] = intensity;
    target[blue] = intensity;
    target[alpha] = 255;

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ. Limit the 
    // TODO: Limit the brightness to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array to this brightness.
}

