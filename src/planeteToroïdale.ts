import {SystèmeCoordonnées} from "./systèmeCoordonnées.interface.ts";
import {Position} from "./position.ts";

export class PlanèteToroïdale implements SystèmeCoordonnées {
    private readonly _taille: number;

    constructor(taille: number) {
        this._taille = taille;

    }

    Normaliser(position: Position): Position {
        return position.Modulo(this._taille).Modulo(-this._taille);
    }
}