import {Position} from "../../src/geometrie/position";
import {PlanèteInfinie} from "./planèteInfinie";
import {Point} from "../../src/geometrie/point";
import {SansObstacles} from "./sansObstacles";
import {SystèmeCoordonnées} from "../../src/topologie/systèmeCoordonnées.interface";
import {Entier} from "../../src/math/Entier";
import {PlanèteAvecObstacles} from "./planeteAvecObstacles";
import {PossèdeObstacles} from "../../src/topologie/possedeObstacles.interface";

export class PositionBuilder {
    static Origine(): Position {
        return new PositionBuilder().Build();
    }

    private _latitude : Entier = Entier.Zéro;
    private _longitude : Entier = Entier.Zéro;
    private _systèmeCoordonnées : SystèmeCoordonnées = new PlanèteInfinie();
    private _obstacles : PossèdeObstacles = new SansObstacles();

    public AyantPourCoordonnées(latitude: number, longitude: number): PositionBuilder {
        this._latitude = new Entier(latitude);
        this._longitude = new Entier(longitude);
        return this;
    }

    Build() : Position {
        return new Position(new Point(this._latitude, this._longitude), this._systèmeCoordonnées, this._obstacles);
    }

    AyantPourSystèmeDeCoordonnées(systèmeCoordonnées: SystèmeCoordonnées) {
        this._systèmeCoordonnées = systèmeCoordonnées;
        return this;
    }

    Origine() {
        return this.AyantPourCoordonnées(0,0);
    }

    SurPlanète(planète: PlanèteAvecObstacles) {
        this._obstacles = planète;
        return this.AyantPourSystèmeDeCoordonnées(planète);
    }
}