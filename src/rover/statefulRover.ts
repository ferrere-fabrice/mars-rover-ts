import {Orientation} from "../topologie/orientations.ts";
import {Position} from "../geometrie/position.ts";
import {EtatRover} from "./etatRover.ts";
import {RoverInterface} from "./rover.interface.ts";

export class StatefulRover implements RoverInterface {
    private _etat: EtatRover;

    constructor(orientation: Orientation, position: Position) {
        this._etat = new EtatRover(orientation, position);
    }

    TourneADroite() : EtatRover {
        return this._etat = this._etat.WithRotationHoraire();
    }

    TourneAGauche(): EtatRover {
        return this._etat = this._etat.WithRotationAntihoraire();
    }

    Avancer() : EtatRover {
        return this._etat = this._etat.WithAvancement();
    }

    Reculer(): EtatRover {
        return this._etat = this._etat.WithRecul();
    }
}