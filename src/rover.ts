import {Orientation} from "./orientation.ts";

export class Rover {
    private _orientation: Orientation;
    constructor(orientation: Orientation) {
        this._orientation = orientation;
    }

    TourneADroite() : Orientation {
        this._orientation = this._orientation.RotationHoraire();
        return this._orientation;
    }
}