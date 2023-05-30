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

    
});