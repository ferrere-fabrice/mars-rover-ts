import {Orientation} from "./topologie/orientation.ts";
import {Position} from "./geometrie/position.ts";

export class EtatRover {
    public readonly Orientation: Orientation;
    public readonly Position: Position;

    public constructor(orientation: Orientation, position: Position) {
        this.Orientation = orientation;
        this.Position = position;
    }

    private WithLatitudeDécrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.DécrémenterLatitude());
    }

    private WithLatitudeIncrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.IncrémenterLatitude());
    }

    private WithLongitudeDécrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.DécrémenterLongitude());
    }

    private WithLongitudeIncrémentée(): EtatRover {
        return new EtatRover(this.Orientation, this.Position.IncrémenterLongitude());
    }

    public WithRotationHoraire() : EtatRover {
        return new EtatRover(this.Orientation.RotationHoraire(), this.Position);
    }

    public WithRotationAntihoraire() : EtatRover {
        return new EtatRover(this.Orientation.RotationAntihoraire(), this.Position);
    }

    public WithAvancement() : EtatRover {
        if(this.Orientation == Orientation.Sud)
            return this.WithLatitudeDécrémentée();
        else if(this.Orientation == Orientation.Est)
            return this.WithLongitudeIncrémentée();
        else if(this.Orientation == Orientation.Ouest)
            return this.WithLongitudeDécrémentée();
        else
            return this.WithLatitudeIncrémentée();
    }

    public WithRecul() : EtatRover {
        if(this.Orientation == Orientation.Sud)
            return this.WithLatitudeIncrémentée();
        else if(this.Orientation == Orientation.Est)
            return this.WithLongitudeDécrémentée();
        else if(this.Orientation == Orientation.Ouest)
            return this.WithLongitudeIncrémentée()
        else
            return this.WithLatitudeDécrémentée()
    }
}