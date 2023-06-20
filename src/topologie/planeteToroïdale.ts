import {SystèmeCoordonnées} from "./systèmeCoordonnées.interface.ts";
import {Point} from "../geometrie/point.ts";
import {Entier} from "../math/Entier.ts";

export class PlanèteToroïdale implements SystèmeCoordonnées {
    private readonly _pointMax : Point;

    constructor(taille: Entier) {
        this._pointMax = new Point(taille, taille);
    }

    Normaliser(point: Point): Point {
        return point.Modulo2D(this._pointMax);
    }
}