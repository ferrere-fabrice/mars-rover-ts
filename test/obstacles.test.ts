import {RoverBuilder} from "./utilities/rover.builder";
import {TestPrimitives} from "./utilities/testPrimitives";
import {CartesianData} from "./utilities/cartesianData";
import {Orientation} from "../src/topologie/orientations";
import {PositionBuilder} from "./utilities/position.builder";
import {PlaneteBuilder} from "../src/topologie/planete.builder";
const each = require("jest-each").default;

describe("FEATURE Obstacles", () => {
    each(new CartesianData(TestPrimitives.Orientations).toTestCases()).
    it("ETANT DONNE un rover posé en (0,0) orienté %s sur une planète de taille 2 " +
        "ET 3 obstacles sur les autres emplacements " +
        "QUAND il avance " +
        "ALORS il ne bouge pas", (orientation: Orientation) => {
        const planète = new PlaneteBuilder()
            .DeTaille(2)
            .AyantUnObstacleAuxCoordonnees(0, 1)
            .AyantUnObstacleAuxCoordonnees(1, 0)
            .AyantUnObstacleAuxCoordonnees(1, 1)
            .Build();

        const positionDépart = new PositionBuilder()
            .Origine()
            .SurPlanète(planète)
            .Build();

        const rover = new RoverBuilder()
            .AyantPourPosition(positionDépart)
            .AyantPourOrientation(orientation)
            .Build();

        const étatFinal = rover.Avancer();

        expect(étatFinal.Position).toEqual(positionDépart);
    })
});