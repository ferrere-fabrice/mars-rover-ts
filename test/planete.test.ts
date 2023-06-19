import {RoverBuilder} from "./utilities/rover.builder";
import {PlanèteToroïdale} from "../src/topologie/planeteToroïdale";
import {CartesianData} from "./utilities/cartesianData";
import {OrientationInterface} from "../src/topologie/orientation";
import {TestPrimitives} from "./utilities/testPrimitives";
import {PositionBuilder} from "./utilities/position.builder";
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
        (orientation: OrientationInterface, latitudeDépart: number, longitudeDépart: number, taille: number) => {
            const planète = new PlanèteToroïdale(taille);

            const positionOriginale = new PositionBuilder()
                .AyantPourCoordonnées(latitudeDépart, longitudeDépart)
                .AyantPourSystèmeDeCoordonnées(planète)
                .Build();

            const rover = new RoverBuilder()
                .AyantPourOrientation(orientation)
                .AyantPourPosition(positionOriginale)
                .Build();

            let positionRenvoyée = positionOriginale;
            for (let i = 0; i < taille; i++) {
                positionRenvoyée = rover.Avancer().Position;
            }

            expect(positionRenvoyée).toStrictEqual(positionOriginale);
    });
});