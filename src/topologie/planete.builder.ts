import {Planète} from "./planète.interface.ts";
import {Point} from "../geometrie/point.ts";
import {Entier} from "../math/Entier.ts";

export class PlaneteBuilder {
    private _taille: number = 1;
    private _obstacles: Point[] = [];

    public DeTaille(taille: number) : PlaneteBuilder {
        this._taille = taille;
        return this;
    }

    public AyantUnObstacle(emplacement: Point) : PlaneteBuilder {
        this._obstacles.push(emplacement);
        return this;
    }

    public AyantUnObstacleAuxCoordonnees(latitude: number, longitude: number) : PlaneteBuilder {
        this._obstacles.push(new Point(new Entier(latitude), new Entier(longitude)));
        return this;
    }

    public Build() : Planète {
        let planète : Planète = new PlanèteToroïdaleVide(new Entier(this._taille));
        for (const obstacle of this._obstacles) {
            planète = new ObstacleDecorator(planète, obstacle);
        }

        return planète;
    }
}

class PlanèteToroïdaleVide implements Planète {
    private readonly _pointMax : Point;

    constructor(taille: Entier) {
        this._pointMax = new Point(taille, taille);
    }

    Normaliser(point: Point): Point {
        return point.Modulo2D(this._pointMax);
    }

    SelonAccessibilité<T>(point: Point, actionSiObstacle: () => T, actionSiLibre: () => T): T {
        return actionSiLibre();
    }
}

class ObstacleDecorator implements Planète {
    private readonly _decorated: Planète;
    private readonly _obstacle: Point;

    public constructor(decorated: Planète, obstacle: Point) {
        this._decorated = decorated;
        this._obstacle = obstacle;
    }

    private EstAccessible(point: Point): boolean {
        const positionNormalisée = this.Normaliser(point);
        return positionNormalisée.Equals(this._obstacle);
    }

    public Normaliser(position: Point): Point {
        return this._decorated.Normaliser(position);
    }

    public SelonAccessibilité<T>(point: Point, actionSiObstacle: () => T, actionSiLibre: () => T): T {
        if(this.EstAccessible(point))
            return actionSiLibre();
        return actionSiObstacle();
    }
}