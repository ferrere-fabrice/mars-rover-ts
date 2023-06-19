import {RoverBuilder} from "./utilities/rover.builder";
import {Position} from "../src/geometrie/position";
import {PlanèteToroïdale} from "../src/topologie/planeteToroïdale";
import {PlanèteAvecObstacles} from "./utilities/planeteAvecObstacles";
import {Point} from "../src/geometrie/point";

describe("FEATURE Obstacles", () => {
    it("ETANT DONNE un rover posé en (0,0) sur une planète de taille 2 " +
        "ET 3 obstacles sur les autres emplacements " +
        "QUAND il avance " +
        "ALORS il ne bouge pas", () => {
        const planète = new PlanèteAvecObstacles(new PlanèteToroïdale(2));
        planète.AjouterObstacle(new Point(0, 1));
        planète.AjouterObstacle(new Point(1, 0));
        planète.AjouterObstacle(new Point(1, 1));

        const positionDépart = new Position(new Point(0, 0), planète, planète);

        const rover = new RoverBuilder()
            .AyantPourPosition(positionDépart)
            .Build();

        const étatFinal = rover.Avancer();

        expect(étatFinal.Position).toEqual(positionDépart);
    })
});