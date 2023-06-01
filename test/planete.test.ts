import {Position} from "../src/position";
import {RoverBuilder} from "./utilities/rover.builder";
import {PlanèteToroïdale} from "../src/planeteToroïdale";

describe('FEATURE Planète', () => {
    test('ETANT DONNE un Rover sur une planète de taille 1 ' +
        'QUAND il avance ' +
        'ALORS il est revenu à son point de départ',
        () => {
            const planète = new PlanèteToroïdale(1);
            const positionOriginale = new Position(0, 0, planète)
            const rover = new RoverBuilder()
                .AyantPourPosition(positionOriginale)
                .Build();

            const positionRenvoyée = rover.Avancer();

            expect(positionRenvoyée).toStrictEqual(positionOriginale);
    });
});