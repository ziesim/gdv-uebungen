import Camera from '../05/camera';
import Sphere from '../05/sphere';
import Intersection from '../05/intersection';
import Vector from '../05/vector';
import Ray from '../05/ray';
import { phong } from './phong';

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
export function raytracePhong(data: Uint8ClampedArray,
                              camera: Camera,
                              spheres: Array<Sphere>,
                              lightPositions: Array<Vector>,
                              shininess: number,
                              x: number, y: number,
                              width: number, height: number) {

    // TODO: Create ray from camera through image plane at position (x, y).
    // TODO: Compute closest intersection with spheres in the scene.
    // TODO: Compute emission at point of intersection using phong model.
    // TODO: Set pixel color accordingly.

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
