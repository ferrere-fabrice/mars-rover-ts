import {Orientation} from "./topologie/orientation.ts";
import {Position} from "./geometrie/position.ts";
import {EtatRover} from "./EtatRover.ts";

export class Rover {
    private _etat: EtatRover;

    constructor(orientation: Orientation, position: Position) {
        this._etat = new EtatRover(orientation, position);
    }

    TourneADroite() : EtatRover {
        this._etat = this._etat.WithRotationHoraire();
        return this._etat;
    }

    TourneAGauche(): EtatRover {
        this._etat = this._etat.WithRotationAntihoraire();
        return this._etat;
    }

    Avancer() : EtatRover {
        if(this._etat.Orientation == Orientation.Sud)
            this._etat = this._etat.WithLatitudeDécrémentée();
        else if(this._etat.Orientation == Orientation.Est)
            this._etat = this._etat.WithLongitudeIncrémentée();
        else if(this._etat.Orientation == Orientation.Ouest)
            this._etat = this._etat.WithLongitudeDécrémentée();
        else
            this._etat = this._etat.WithLatitudeIncrémentée();

        return this._etat;
    }

    Reculer(): EtatRover {
        if(this._etat.Orientation == Orientation.Sud)
            this._etat = this._etat.WithLatitudeIncrémentée();
        else if(this._etat.Orientation == Orientation.Est)
            this._etat = this._etat.WithLongitudeDécrémentée();
        else if(this._etat.Orientation == Orientation.Ouest)
            this._etat = this._etat.WithLongitudeIncrémentée()
        else
            this._etat = this._etat.WithLatitudeDécrémentée()

        return this._etat;
    }
}