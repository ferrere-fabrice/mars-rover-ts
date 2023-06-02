import {Rover} from "./rover.ts";
import {EtatRover} from "./EtatRover.ts";

export class InterpréteurRover {
    private _rover: Rover;
    public constructor(rover: Rover) {
        this._rover = rover;
    }

    public Interpréter(commande: string) : EtatRover {
        if(commande.length > 1) {
            this.Interpréter(commande[0]);
            return this.Interpréter(commande.slice(1));
        }

        if(commande == "A") return this._rover.Avancer();
        if(commande == "R") return this._rover.Reculer();
        if(commande == "D") return this._rover.TourneADroite();
        if(commande == "G") return this._rover.TourneAGauche();

        throw new Error();
    }
}