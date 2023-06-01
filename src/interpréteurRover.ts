import {Rover} from "./rover.ts";
import {Position} from "./geometrie/position.ts";

export class InterpréteurRover {
    private _rover: Rover;
    public constructor(rover: Rover) {
        this._rover = rover;
    }


    public Interpréter(commande: string) : Position {
        if(commande == "A") return this._rover.Avancer();
        if(commande == "R") return this._rover.Reculer();

        throw new Error();
    }
}