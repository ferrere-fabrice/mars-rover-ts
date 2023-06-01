import {Position} from "./position.ts";

export interface SystèmeCoordonnées {
    Normaliser(position: Position) : Position;
}