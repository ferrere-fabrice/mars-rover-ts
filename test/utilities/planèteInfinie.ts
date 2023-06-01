import {SystèmeCoordonnées} from "../../src/systèmeCoordonnées.interface";
import {Position} from "../../src/position";

export class PlanèteInfinie implements SystèmeCoordonnées {
    Normaliser(position: Position): Position {
        return position;
    }
}