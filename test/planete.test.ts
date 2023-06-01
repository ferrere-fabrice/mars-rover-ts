import {Position} from "../src/position";
import {RoverBuilder} from "./utilities/rover.builder";
import {PlanèteToroïdale} from "../src/planeteToroïdale";
import {CartesianData} from "./utilities/cartesianData";
import {Orientation} from "../src/orientation";
import {TestPrimitives} from "./utilities/testPrimitives";
import {Point} from "../src/point";
const each = require("jest-each").default;

const taillesPlanètes = [1, 2, 10];
const latitudesDépart = [0, 1, 11];
const longitudesDépart = [0, 1, 11];

describe('FEATURE Planète', () => {
    each(new CartesianData(TestPrimitives.Orientations, latitudesDépart, longitudesDépart, taillesPlanètes).toTestCases())
        .it('ETANT DONNE un Rover orienté %s ' +
            'ET posé aux coordonnées %s, %s sur une planète de taille %s ' +
            'QUAND il avance suffisamment pour faire le tour de la planète ' +
            'ALORS il est revenu à son point de départ',
        (orientation: Orientation, latitudeDépart: number, longitudeDépart: number, taille: number) => {
            const planète = new PlanèteToroïdale(taille);
            const positionOriginale = new Position(new Point(latitudeDépart, longitudeDépart), planète)
            const rover = new RoverBuilder()
                .AyantPourOrientation(orientation)
                .AyantPourPosition(positionOriginale)
                .Build();

            let positionRenvoyée = positionOriginale;
            for (let i = 0; i < taille; i++) {
                positionRenvoyée = rover.Avancer();
            }

            expect(positionRenvoyée).toStrictEqual(positionOriginale);
    });
});