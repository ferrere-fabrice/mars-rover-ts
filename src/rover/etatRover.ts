import {Orientation} from "../topologie/orientations.ts";
import {Position} from "../geometrie/position.ts";

export class EtatRover {
    public readonly Orientation: Orientation;
    public readonly Position: Position;

    public constructor(orientation: Orientation, position: Position) {
        this.Orientation = orientation;
        this.Position = position;
    }

    public WithRotationHoraire() : EtatRover {
        return new EtatRover(
            this.Orientation.RotationHoraire(),
            this.Position);
    }

    public WithRotationAntihoraire() : EtatRover {
        return new EtatRover(
            this.Orientation.RotationAntihoraire(),
            this.Position);
    }

    public WithAvancement() : EtatRover {
        return new EtatRover(
            this.Orientation,
            this.Orientation.FaireAvancer(this.Position));
    }

    public WithRecul() : EtatRover {
        return new EtatRover(
            this.Orientation,
            this.Orientation.FaireReculer(this.Position));
    }
}