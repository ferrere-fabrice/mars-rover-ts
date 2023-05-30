import {Orientation} from "./orientation.ts";
import {Position} from "./position.ts";

export class Rover {
    private _orientation: Orientation;

    constructor(orientation: Orientation, _: Position) {
        this._orientation = orientation;
    }

    TourneADroite() : Orientation {
        this._orientation = this._orientation.RotationHoraire();
        return this._orientation;
    }

    TourneAGauche(): Orientation {
        this._orientation = this._orientation.RotationAntihoraire();
        return this._orientation;
    }

    Avancer() : Position {
        if(this._orientation == Orientation.Sud) return new Position(-1, 0);
        return new Position(1, 0);
    }
}