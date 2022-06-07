import Camera from './camera';
import Sphere from './sphere';
import Intersection from './intersection';
import Vector from './vector';
import Ray from './ray';

/**
 * Compute the color of the pixel (x, y) by raytracing
 * using a given camera and multiple spheres.
 *
 * @param data The linearised pixel array
 * @param camera The camera used for raytracing
 * @param spheres The spheres to raytrace
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function raytrace(data: Uint8ClampedArray,
                         camera: Camera,
                         spheres: Array<Sphere>,
                         x: number, y: number,
                         width: number, height: number) {

    // TODO: Generate ray and perform intersection with every sphere.
    // TODO: On intersection set pixel color to color of the sphere
    // TODO: containing the closest intersection point.

    let ray = Ray.makeRay(x, y, camera);

    let red = ((y * width) + x) * 4;
    let green = ((y * width) + x) * 4 + 1;
    let blue = ((y * width) + x) * 4 + 2;
    let alpha = ((y * width) + x) * 4 + 3;

    data[red] = 255;
    data[green] = 255;
    data[blue] = 255;
    data[alpha] = 255;

    let distance = Infinity;

    for (let i = 0; i < spheres.length; i++) {
        let intersect = spheres[i].intersect(ray);

        if (intersect != null && distance > intersect.t) {
            data[red] = spheres[i].color.r * 255;
            data[green] = spheres[i].color.g * 255;
            data[blue] = spheres[i].color.b * 255;
            distance = intersect.t;
        }
    }
}
