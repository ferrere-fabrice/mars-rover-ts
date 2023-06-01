import {SystèmeCoordonnées} from "./systèmeCoordonnées.interface.ts";
import {Point} from "./point.ts";

export class Position {
    private readonly _point: Point;
    private readonly _systèmeCoordonnées: SystèmeCoordonnées;

    constructor(point: Point, systèmeCoordonnées: SystèmeCoordonnées) {
        this._point = systèmeCoordonnées.Normaliser(point);
        this._systèmeCoordonnées = systèmeCoordonnées;
    }

    IncrémenterLatitude() : Position {
        return new Position(this._point.IncrémenterLatitude(), this._systèmeCoordonnées);
    }

    DécrémenterLatitude() : Position {
        return new Position(this._point.DécrémenterLatitude(), this._systèmeCoordonnées);
    }

    IncrémenterLongitude() : Position {
        return new Position(this._point.IncrémenterLongitude(), this._systèmeCoordonnées);
    }

    DécrémenterLongitude() : Position {
        return new Position(this._point.DécrémenterLongitude(), this._systèmeCoordonnées);
    }
}