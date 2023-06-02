import {Orientation} from "./topologie/orientation.ts";
import {Position} from "./geometrie/position.ts";

export class EtatRover {
    public readonly Orientation: Orientation;
    public readonly Position: Position;

    public constructor(orientation: Orientation, position: Position) {
        this.Orientation = orientation;
        this.Position = position;
    }

    public WithLatitudeDécrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.DécrémenterLatitude());
    }

    public WithLatitudeIncrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.IncrémenterLatitude());
    }

    public WithLongitudeDécrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.DécrémenterLongitude());
    }

    public WithLongitudeIncrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.IncrémenterLongitude());
    }

    public WithRotationHoraire() : EtatRover {
        return new EtatRover(this.Orientation.RotationHoraire(), this.Position);
    }

    public WithRotationAntihoraire() : EtatRover {
        return new EtatRover(this.Orientation.RotationAntihoraire(), this.Position);
    }
}