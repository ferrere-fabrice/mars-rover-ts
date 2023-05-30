import {Rover} from "../src/rover";
import {Orientation} from "../src/orientation";
const each = require("jest-each").default;

describe('FEATURE Rotation', () => {
    each([
        [Orientation.Nord, 1, Orientation.Est],
        [Orientation.Est, 1, Orientation.Sud],
        [Orientation.Sud, 1, Orientation.Ouest],
        [Orientation.Ouest, 1, Orientation.Nord],
        [Orientation.Nord, 2, Orientation.Sud],
        [Orientation.Est, 2, Orientation.Ouest],
        [Orientation.Sud, 2, Orientation.Nord],
        [Orientation.Ouest, 2, Orientation.Est],
    ])
        .it('ETANT DONNE un rover orienté %s ' +
        'QUAND il tourne à droite %s fois' +
        'ALORS son orientation est %s', (initiale: Orientation, nombreFois: number, finale: Orientation) => {
        const rover = new Rover(initiale);

        let orientationRover: Orientation = initiale;
        for (let rotations=0; rotations<nombreFois; rotations++){
            orientationRover = rover.TourneADroite();
        }

        expect(orientationRover).toBe(finale);
    });

    each([
        [Orientation.Nord, 1, Orientation.Ouest],
        [Orientation.Est, 1, Orientation.Nord],
        [Orientation.Sud, 1, Orientation.Est],
        [Orientation.Ouest, 1, Orientation.Sud],
        [Orientation.Nord, 2, Orientation.Sud],
        [Orientation.Est, 2, Orientation.Ouest],
        [Orientation.Sud, 2, Orientation.Nord],
        [Orientation.Ouest, 2, Orientation.Est],
    ])
        .it('ETANT DONNE un rover orienté %s ' +
            'QUAND il tourne à gauche %s fois' +
            'ALORS son orientation est %s', (initiale: Orientation, nombreFois: number, finale: Orientation) => {
            const rover = new Rover(initiale);

            let orientationRover: Orientation = initiale;
            for (let rotations=0; rotations<nombreFois; rotations++){
                orientationRover = rover.TourneAGauche();
            }

            expect(orientationRover).toBe(finale);
        });
});