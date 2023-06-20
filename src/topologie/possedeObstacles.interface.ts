import {Point} from "../geometrie/point.ts";

export interface PossèdeObstacles {
    SelonAccessibilité<T>(point: Point, actionSiObstacle: () => T, actionSiLibre: () => T): T;
}