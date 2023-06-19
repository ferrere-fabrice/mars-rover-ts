import {StatefulRover} from "../../src/rover/statefulRover";
import {Orientation, OrientationInterface} from "../../src/topologie/orientation";
import {Position} from "../../src/geometrie/position";
import {PositionBuilder} from "./position.builder";

export class RoverBuilder {

    private _orientation: OrientationInterface = Orientation.Nord;
    private _position: Position = PositionBuilder.Origine();

    AyantPourOrientation(orientation: OrientationInterface): RoverBuilder{
        this._orientation = orientation;
        return this;
    };

    AyantPourPosition(position: Position): RoverBuilder{
        this._position = position;
        return this;
    }

    Build(): StatefulRover {
        return new StatefulRover(this._orientation, this._position);
    };
}