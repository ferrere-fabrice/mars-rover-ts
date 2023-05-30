export class Orientation {
    static Nord: Orientation = new Orientation("Nord");
    static Sud: Orientation = new Orientation("Sud");
    static Est: Orientation = new Orientation("Est");
    static Ouest: Orientation = new Orientation("Ouest");
    private readonly _representation: string;

    private constructor(representation: string) {
        this._representation = representation;
    }

    RotationHoraire() : Orientation {
        if(this == Orientation.Est) return Orientation.Sud;
        if(this == Orientation.Sud) return Orientation.Ouest;
        if(this == Orientation.Ouest) return Orientation.Nord;
        return Orientation.Est;
    }

    toString(): string {
        return this._representation;
    }
}