import {Entier} from "../math/Entier.ts";

export class Point{
    private readonly _latitude: Entier;
    private readonly _longitude: Entier;

    constructor(latitude: Entier, longitude: Entier) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    public Modulo(modulo: Entier) {
        return new Point(
            this._latitude.Modulo(modulo),
            this._longitude.Modulo(modulo));
    }

    public IncrémenterLatitude() : Point {
        return new Point(this._latitude.Incrémenter(), this._longitude);
    }

    public DécrémenterLatitude() : Point {
        return new Point(this._latitude.Décrémenter(), this._longitude);
    }

    public IncrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude.Incrémenter());
    }

    public DécrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude.Décrémenter());
    }

    public Add(other: Point) : Point {
        return new Point(
            this._latitude.Additionner(other._latitude),
            this._longitude.Additionner(other._longitude));
    }
}