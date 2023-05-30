export class Position {
    private readonly _latitude: number;
    private readonly _longitude: number;
    constructor(latitude: number, longitude: number) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    IncrémenterLatitude() : Position {
        return new Position(this._latitude + 1, this._longitude);
    }

    DécrémenterLatitude() : Position {
        return new Position(this._latitude - 1, this._longitude);
    }

    IncrémenterLongitude() : Position {
        return new Position(0, this._longitude + 1);
    }

    DécrémenterLongitude() : Position {
        return new Position(0, this._longitude - 1);
    }
}