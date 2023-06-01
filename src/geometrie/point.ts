export class Point{
    private readonly _latitude: number;
    private readonly _longitude: number;

    constructor(latitude: number, longitude: number) {
        this._latitude = latitude == -0 ? 0 : latitude;
        this._longitude = longitude == -0 ? 0 : longitude;
    }

    public Modulo(modulo: number) {
        return new Point(
            this._latitude % modulo,
            this._longitude % modulo);
    }

    public IncrémenterLatitude() : Point {
        return new Point(this._latitude + 1, this._longitude);
    }

    public DécrémenterLatitude() : Point {
        return new Point(this._latitude - 1, this._longitude);
    }

    public IncrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude + 1);
    }

    public DécrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude - 1);
    }

    public Add(other: Point) : Point {
        return new Point(this._latitude + other._latitude, this._longitude + other._longitude);
    }
}