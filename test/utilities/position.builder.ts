import {Position} from "../../src/geometrie/position";
import {PlanèteInfinie} from "./planèteInfinie";
import {Point} from "../../src/geometrie/point";

export class PositionBuilder {
    static Origine(): Position {
        return new PositionBuilder().Build();
    }

    private _latitude : number = 0;
    private _longitude : number = 0;

    public AyantPourCoordonnées(latitude: number, longitude: number): PositionBuilder {
        this._latitude = latitude;
        this._longitude = longitude;
        return this;
    }

    Build() : Position {
        return new Position(new Point(this._latitude, this._longitude), new PlanèteInfinie());
    }
}