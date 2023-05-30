import {Rover} from "../../src/rover";
import {Orientation} from "../../src/orientation";
import {Position} from "../../src/position";

export class RoverBuilder {

    private _orientation: Orientation = Orientation.Nord;
    private _position: Position = new Position(0, 0);

    AyantPourOrientation(orientation: Orientation): RoverBuilder{
        this._orientation = orientation;
        return this;
    };

    AyantPourPosition(position: Position): RoverBuilder{
        this._position = position;
        return this;
    }

    Build(): Rover {
        return new Rover(this._orientation, this._position);
    };
}