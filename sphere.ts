import Vector from './vector';
import Intersection from './intersection';
import Ray from './ray';

/**
 * A class representing a sphere
 */
export default class Sphere {

    public center: Vector;
    public radius: number;
    public color: Vector;

    /**
     * Creates a new Sphere with center and radius
     * @param center The center of the Sphere
     * @param radius The radius of the Sphere
     * @param color The color of the Sphere
     */
    constructor(
        center: Vector,
        radius: number,
        color: Vector
    ) {
        this.center = center;
        this.radius = radius;
        this.color = color;
     }

    /**
     * Calculates the intersection of the sphere with the given ray
     * @param ray The ray to intersect with
     * @return The intersection if there is one, null if there is none
     */
    intersect(ray: Ray): Intersection | null {
        // TODO: Calculate the quadratic equation for ray-sphere
        // TODO: intersection. You will need the origin of your ray as x0,
        // TODO: the ray direction, and the radius of the sphere.
        // TODO: Don't forget to translate your ray's starting position with
        // TODO: respect to the center of the sphere.
        // TODO: Calculate the discriminant c, and distinguish between the 3
        // TODO: possible outcomes: no hit, one hit, or two hits.
        // TODO: Return an Intersection or null if there was no hit. In case
        // TODO: of two hits, return the one closer to the start point of
        // TODO: the ray.
        
        let x0 = ray.origin.sub(this.center);
        let dir = ray.direction;
        let rad = this.radius;
        let c = Math.pow(x0.dot(dir), 2) - x0.dot(x0) + Math.pow(rad, 2);
        
        if (c < 0) {
            return null;
        } else if (c == 0) {
            let t = -1 * x0.dot(dir);
            let point = ray.origin.add(dir.mul(t));
            let normal = point.sub(this.center);
            normal.normalize();
            return new Intersection(t, point, normal);
        } else {
            let t1 = -1 * x0.dot(dir) + Math.sqrt(c);
            let t2 = -1 * x0.dot(dir) - Math.sqrt(c);
            if (t1 < t2) {
                let point = ray.origin.add(dir.mul(t1));
                let normal = point.sub(this.center);
                normal.normalize();
                return new Intersection(t1, point, normal);
            } else {
                let point = ray.origin.add(dir.mul(t2));
                let normal = point.sub(this.center);
                normal.normalize();
                return new Intersection(t2, point, normal);
            }
        }
    }
}
