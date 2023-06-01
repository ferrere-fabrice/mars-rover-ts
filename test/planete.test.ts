import {Position} from "../src/position";
import {RoverBuilder} from "./utilities/rover.builder";
import {PlanèteToroïdale} from "../src/planeteToroïdale";
import {CartesianData} from "./utilities/cartesianData";
import {Orientation} from "../src/orientation";
import {TestPrimitives} from "./utilities/testPrimitives";
const each = require("jest-each").default;

describe('FEATURE Planète', () => {
    each(new CartesianData(TestPrimitives.Orientations).toTestCases())
        .it('ETANT DONNE un Rover orienté %s sur une planète de taille 1 ' +
        'QUAND il avance ' +
        'ALORS il est revenu à son point de départ',
        (orientation: Orientation) => {
            const planète = new PlanèteToroïdale(1);
            const positionOriginale = new Position(0, 0, planète)
            const rover = new RoverBuilder()
                .AyantPourOrientation(orientation)
                .AyantPourPosition(positionOriginale)
                .Build();

            const positionRenvoyée = rover.Avancer();

            expect(positionRenvoyée).toStrictEqual(positionOriginale);
    });
});