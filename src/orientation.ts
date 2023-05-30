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
        if(this == Orientation.Ouest) return Orientation.Nord;
        return Orientation.Est;
    }

    toString(): string {
        if(this == Orientation.Est) return "Est";
        if(this == Orientation.Sud) return "Sud";
        if(this == Orientation.Ouest) return "Ouest";
        return "Nord";
    }
}