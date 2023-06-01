import {SystèmeCoordonnées} from "../../src/systèmeCoordonnées.interface";
import {Point} from "../../src/point";

export class PlanèteInfinie implements SystèmeCoordonnées {
    Normaliser(point: Point): Point {
        return point;
    }
}