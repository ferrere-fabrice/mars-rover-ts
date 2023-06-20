import {PossèdeObstacles} from "../../src/topologie/possedeObstacles.interface";
import {SystèmeCoordonnées} from "../../src/topologie/systèmeCoordonnées.interface";
import {Point} from "../../src/geometrie/point";
import {Entier} from "../../src/math/Entier";

export class PlanèteAvecObstacles implements PossèdeObstacles, SystèmeCoordonnées {
    private _decorated: SystèmeCoordonnées;
    private _obstacles: Point[];

    public constructor(decorated: SystèmeCoordonnées) {
        this._decorated = decorated;
        this._obstacles = [];
    }

    public AjouterObstacle(latitude: number, longitude: number){
        this._obstacles.push(this.Normaliser(new Point(new Entier(latitude), new Entier(longitude))));
    }

    private EstAccessible(point: Point): boolean {
        const positionNormalisée = this.Normaliser(point);
        return this._obstacles.includes(positionNormalisée);
    }

    public Normaliser(position: Point): Point {
        return this._decorated.Normaliser(position);
    }

    SelonAccessibilité<T>(point: Point, actionSiObstacle: () => T, actionSiLibre: () => T): T {
        if(this.EstAccessible(point))
            return actionSiLibre();
        return actionSiObstacle();
    }
}