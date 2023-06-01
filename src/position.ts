import {SystèmeCoordonnées} from "./systèmeCoordonnées.interface.ts";

export class Position {
    private readonly _latitude: number;
    private readonly _longitude: number;
    private readonly _systèmeCoordonnées: SystèmeCoordonnées;

    constructor(latitude: number, longitude: number, systèmeCoordonnées: SystèmeCoordonnées) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._systèmeCoordonnées = systèmeCoordonnées;
    }

    IncrémenterLatitude() : Position {
        return this._systèmeCoordonnées.Normaliser(new Position(this._latitude + 1, this._longitude, this._systèmeCoordonnées));
    }

    DécrémenterLatitude() : Position {
        return new Position(this._latitude - 1, this._longitude, this._systèmeCoordonnées);
    }

    IncrémenterLongitude() : Position {
        return new Position(this._latitude, this._longitude + 1, this._systèmeCoordonnées);
    }

    DécrémenterLongitude() : Position {
        return new Position(this._latitude, this._longitude - 1, this._systèmeCoordonnées);
    }

    Modulo(modulo: number) {
        return new Position(this._latitude % modulo, this._longitude % modulo, this._systèmeCoordonnées);
    }
}