import {OrientationInterface} from "../topologie/orientation.ts";
import {Position} from "../geometrie/position.ts";
import {EtatRover} from "./etatRover.ts";
import {RoverInterface} from "./rover.interface.ts";

export class StatefulRover implements RoverInterface {
    private _etat: EtatRover;

    constructor(orientation: OrientationInterface, position: Position) {
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