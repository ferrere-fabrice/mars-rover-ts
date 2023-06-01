import {SystèmeCoordonnées} from "../../src/topologie/systèmeCoordonnées.interface";
import {Point} from "../../src/geometrie/point";

export class PlanèteInfinie implements SystèmeCoordonnées {
    Normaliser(point: Point): Point {
        return point;
    }
}