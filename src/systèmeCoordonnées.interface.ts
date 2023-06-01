import {Point} from "./point.ts";

export interface SystèmeCoordonnées {
    Normaliser(position: Point) : Point;
}