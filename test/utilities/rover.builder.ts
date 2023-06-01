import {Rover} from "../../src/rover";
import {Orientation} from "../../src/topologie/orientation";
import {Position} from "../../src/geometrie/position";
import {PositionBuilder} from "./position.builder";

export class RoverBuilder {

    private _orientation: Orientation = Orientation.Nord;
    private _position: Position = PositionBuilder.Origine();

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