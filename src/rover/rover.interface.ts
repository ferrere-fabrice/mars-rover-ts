import {EtatRover} from "./etatRover.ts";

export interface RoverInterface {
    TourneADroite() : EtatRover;
    TourneAGauche(): EtatRover;
    Avancer() : EtatRover;
    Reculer(): EtatRover;
}