import {Rover} from "../src/rover";
import {Orientation} from "../src/orientation";
const each = require("jest-each").default;

describe('FEATURE Rotation', () => {
    each([
        [Orientation.Nord, Orientation.Est],
        [Orientation.Est, Orientation.Sud],
        [Orientation.Sud, Orientation.Ouest],
    ])
        .it('ETANT DONNE un rover orienté %s ' +
        'QUAND il tourne à droite ' +
        'ALORS son orientation est %s', (initiale: Orientation, finale: Orientation) => {
        const rover = new Rover(initiale);
        const orientationRover = rover.TourneADroite();

        expect(orientationRover).toBe(finale);
    });
});