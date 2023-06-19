import {Position} from "../geometrie/position.ts";

export interface OrientationInterface {
    RotationHoraire() : OrientationInterface;
    RotationAntihoraire() : OrientationInterface;
    Avancement(position : Position) : Position;
    Recul(position : Position) : Position;
    toString(): string;
}

class OrientationNord implements OrientationInterface {
    public static Instance = new OrientationNord();

    private constructor(){
    }

    Avancement(position: Position): Position {
        return position.IncrémenterLatitude();
    }

    Recul(position: Position): Position {
        return position.DécrémenterLatitude();
    }

    RotationAntihoraire(): OrientationInterface {
        return Orientation.Est;
    }

    RotationHoraire(): OrientationInterface {
        return Orientation.Ouest;
    }

    toString(): string {
        return "Nord";
    }
}

class OrientationSud implements OrientationInterface {
    public static Instance = new OrientationSud();

    private constructor(){
    }

    Avancement(position: Position): Position {
        return position.DécrémenterLatitude();
    }

    Recul(position: Position): Position {
        return position.IncrémenterLatitude();
    }

    RotationAntihoraire(): OrientationInterface {
        return Orientation.Ouest;
    }

    RotationHoraire(): OrientationInterface {
        return Orientation.Est;
    }

    toString(): string {
        return "Sud";
    }
}

class OrientationEst implements OrientationInterface {
    public static Instance = new OrientationEst();

    private constructor(){
    }

    Avancement(position: Position): Position {
        return position.IncrémenterLongitude();
    }

    Recul(position: Position): Position {
        return position.DécrémenterLongitude();
    }

    RotationAntihoraire(): OrientationInterface {
        return Orientation.Nord;
    }

    RotationHoraire(): OrientationInterface {
        return Orientation.Sud;
    }

    toString(): string {
        return "Est";
    }
}

class OrientationOuest implements OrientationInterface {
    public static Instance = new OrientationOuest();

    private constructor(){
    }

    Avancement(position: Position): Position {
        return position.DécrémenterLongitude();
    }

    Recul(position: Position): Position {
        return position.IncrémenterLongitude();
    }

    RotationAntihoraire(): OrientationInterface {
        return Orientation.Ouest;
    }

    RotationHoraire(): OrientationInterface {
        return Orientation.Est;
    }

    toString(): string {
        return "Ouest";
    }
}

export class Orientation {
    static Nord: OrientationInterface = OrientationNord.Instance;
    static Sud: OrientationInterface = OrientationSud.Instance;
    static Est: OrientationInterface = OrientationEst.Instance;
    static Ouest: OrientationInterface = OrientationOuest.Instance;
}