import {Rover} from "./rover.ts";
import {RoverInterface} from "./rover.interface.ts";

export class InterpréteurRover {
    private _rover: RoverInterface;
    public constructor(roverCommandé: RoverInterface) {
        this._rover = roverCommandé;
    }

    public Interpréter(commande: string) : Rover {
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