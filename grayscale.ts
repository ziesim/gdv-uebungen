/**
 * Convert the color information of the pixel at (x, y) to grayscale by using the
 * Y coordinate of the XYZ color space.
 *
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function grayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {
    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;

    let y1 = 0.2126729;
    let y2 = 0.7151522;
    let y3 = 0.0721750;

    let intensity = source[red] * y1 + source[green] * y2 + source[green] * y3;

    target[red] = intensity;
    target[green] = intensity;
    target[blue] = intensity;
    target[alpha] = 255;

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ.
    // TODO: Set the RGBA values in the target array according to the Y component of the source pixel in XYZ space.
}

