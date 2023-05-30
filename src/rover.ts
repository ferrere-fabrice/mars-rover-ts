import {Orientation} from "./orientation.ts";

export class Rover {
    private _orientation: Orientation;
    constructor(orientation: Orientation) {
        this._orientation = orientation;
    }

    TourneADroite() : Orientation {
        return this._orientation.RotationHoraire();
    }
}