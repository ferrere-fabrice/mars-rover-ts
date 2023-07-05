import {Orientations, Orientation} from "../src/topologie/orientations";
import {RoverBuilder} from "./utilities/rover.builder";
const each = require("jest-each").default;

describe('FEATURE Rotation', () => {
    each([
        [Orientations.Nord, 1, Orientations.Est],
        [Orientations.Est, 1, Orientations.Sud],
        [Orientations.Sud, 1, Orientations.Ouest],
        [Orientations.Ouest, 1, Orientations.Nord],
        [Orientations.Nord, 2, Orientations.Sud],
        [Orientations.Est, 2, Orientations.Ouest],
        [Orientations.Sud, 2, Orientations.Nord],
        [Orientations.Ouest, 2, Orientations.Est],
    ])
        .it('ETANT DONNE un rover orienté %s ' +
        'QUAND il tourne à droite %s fois ' +
        'ALORS son orientation est %s', (initiale: Orientation, nombreFois: number, finale: Orientations) => {
        let rover = new RoverBuilder()
            .AyantPourOrientation(initiale)
            .Build();

        for (let rotations=0; rotations<nombreFois; rotations++){
            rover = rover.TourneADroite();
        }

        expect(rover.Orientation).toEqual(finale);
    });

    each([
        [Orientations.Nord, 1, Orientations.Ouest],
        [Orientations.Est, 1, Orientations.Nord],
        [Orientations.Sud, 1, Orientations.Est],
        [Orientations.Ouest, 1, Orientations.Sud],
        [Orientations.Nord, 2, Orientations.Sud],
        [Orientations.Est, 2, Orientations.Ouest],
        [Orientations.Sud, 2, Orientations.Nord],
        [Orientations.Ouest, 2, Orientations.Est],
    ])
        .it('ETANT DONNE un rover orienté %s ' +
            'QUAND il tourne à gauche %s fois ' +
            'ALORS son orientation est %s', (initiale: Orientation, nombreFois: number, finale: Orientation) => {
            let rover = new RoverBuilder()
                .AyantPourOrientation(initiale)
                .Build();

            for (let rotations=0; rotations<nombreFois; rotations++){
                rover = rover.TourneAGauche();
            }

            expect(rover.Orientation).toStrictEqual(finale);
        });
});