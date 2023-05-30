import {Orientation} from "./orientation.ts";

export class Rover {
    constructor(_: Orientation) {
    }

    TourneADroite() : Orientation {
        return Orientation.Est;
    }
}