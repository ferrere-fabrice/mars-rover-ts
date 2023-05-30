import {Rover} from "../src/rover";
import {Orientation} from "../src/orientation";

describe('FEATURE Rotation', () => {
    test('ETANT DONNE un rover orienté Nord ' +
        'QUAND il tourne à droite ' +
        'ALORS son orientation est Est', () => {
        const rover = new Rover(Orientation.Nord);
        const orientationRover = rover.TourneADroite();

        expect(orientationRover).toBe(Orientation.Est);
    });

    test('ETANT DONNE un rover orienté Est ' +
        'QUAND il tourne à droite ' +
        'ALORS son orientation est Sud', () => {
        const rover = new Rover(Orientation.Est);
        const orientationRover = rover.TourneADroite();

        expect(orientationRover).toBe(Orientation.Sud);
    });

    test('ETANT DONNE un rover orienté Sud ' +
        'QUAND il tourne à droite ' +
        'ALORS son orientation est Ouest', () => {
        const rover = new Rover(Orientation.Sud);
        const orientationRover = rover.TourneADroite();

        expect(orientationRover).toBe(Orientation.Ouest);
    });
});