import {SystèmeCoordonnées} from "./systèmeCoordonnées.interface.ts";
import {Point} from "../geometrie/point.ts";
import {Entier} from "../math/Entier.ts";

export class PlanèteToroïdale implements SystèmeCoordonnées {
    private readonly _taille: Entier;
    private readonly _pointMax : Point;

    constructor(taille: Entier) {
        this._taille = taille;
        this._pointMax = new Point(taille, taille);
    }

    Normaliser(point: Point): Point {
        // Maths probablement sous optimisées mais fatigue
        const normaliséSigné = point.Modulo(this._taille).Modulo(this._taille.Inverser());
        return normaliséSigné.Add(this._pointMax).Modulo(this._taille);
    }
}