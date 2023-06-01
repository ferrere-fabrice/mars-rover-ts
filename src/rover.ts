import {Orientation} from "./orientation.ts";
import {Position} from "./position.ts";

export class Rover {
    private _orientation: Orientation;
    private _position: Position;

    constructor(orientation: Orientation, position: Position) {
        this._orientation = orientation;
        this._position = position;
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
        if(this._orientation == Orientation.Sud)
            this._position = this._position.DécrémenterLatitude();
        else if(this._orientation == Orientation.Est)
            this._position = this._position.IncrémenterLongitude();
        else if(this._orientation == Orientation.Ouest)
            this._position = this._position.DécrémenterLongitude();
        else
            this._position = this._position.IncrémenterLatitude();

        return this._position;
    }

    Reculer(): Position {
        if(this._orientation == Orientation.Sud)
            this._position = this._position.IncrémenterLatitude();
        else if(this._orientation == Orientation.Est)
            this._position = this._position.DécrémenterLongitude();
        else if(this._orientation == Orientation.Ouest)
            this._position = this._position.IncrémenterLongitude();
        else
            this._position = this._position.DécrémenterLatitude();

        return this._position;
    }
}