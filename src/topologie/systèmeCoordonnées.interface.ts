import {Point} from "../geometrie/point.ts";

export interface SystèmeCoordonnées {
    Normaliser(position: Point) : Point;
}