export class Orientation {
    static Nord: Orientation = new Orientation();
    static Sud: Orientation = new Orientation();
    static Est: Orientation = new Orientation();
    static Ouest: Orientation = new Orientation();

    private constructor() {
    }

    RotationHoraire() : Orientation {
        if(this == Orientation.Est) return Orientation.Sud;
        if(this == Orientation.Sud) return Orientation.Ouest;


        return Orientation.Est;
    }
}