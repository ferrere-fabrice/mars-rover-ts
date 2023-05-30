export class Position {
    private readonly _latitude: number;
    constructor(latitude: number, _: number) {
        this._latitude = latitude;
    }

    IncrémenterLatitude() : Position {
        return new Position(this._latitude + 1, 0);
    }

    DécrémenterLatitude() {
        return new Position(this._latitude - 1, 0);
    }
}