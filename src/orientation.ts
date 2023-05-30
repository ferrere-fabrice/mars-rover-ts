export class Orientation {
    static Nord: Orientation = new Orientation();
    static Sud: Orientation = new Orientation();
    static Est: Orientation = new Orientation();
    static Ouest: Orientation = new Orientation();

    private constructor() {
    }

    RotationHoraire() : Orientation {
        return this == Orientation.Est ? Orientation.Sud : Orientation.Est;
    }
}