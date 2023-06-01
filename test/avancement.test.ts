import {Orientation} from "../src/orientation";
import {Position} from "../src/position";
import {RoverBuilder} from "./utilities/rover.builder";
import {CartesianData} from "./utilities/cartesianData";
const each = require("jest-each").default;

const orientations = [Orientation.Nord, Orientation.Sud, Orientation.Est, Orientation.Ouest];
const latitudesDépart = [0, 1];
const longitudesDépart = [0, 1];

describe('FEATURE Avancement', () => {
    each(
        new CartesianData(latitudesDépart, longitudesDépart, orientations).toTestCases()
    ).it('ETANT DONNE un rover démarrant en %s, %s, orienté %s ' +
        'QUAND il avance puis recule ' +
        'ALORS sa nouvelle position est sa position de départ',
        (latitudeDépart: number, longitudeDépart: number, orientation: Orientation) => {

            const positionOriginale = new Position(latitudeDépart, longitudeDépart)
            const rover = new RoverBuilder()
                .AyantPourPosition(positionOriginale)
                .AyantPourOrientation(orientation)
                .Build();

            rover.Avancer();
            const positionFinale = rover.Reculer();

            expect(positionFinale).toStrictEqual(positionOriginale);
    });


    each([
        [1],
        [2],
    ]).it('ETANT DONNE un rover orienté Nord ' +
        'QUAND il avance %s fois ' +
        'ALORS la composante latitudinale de sa position augmente d\'autant',
        (nombreMouvements: number) => {
            const positionOriginale = new Position(0, 0)
            const rover = new RoverBuilder()
                .AyantPourOrientation(Orientation.Nord)
                .AyantPourPosition(positionOriginale)
                .Build();

            let positionAttendue = positionOriginale;
            let positionRenvoyée = positionOriginale;

            for(let mouvements =0; mouvements < nombreMouvements; mouvements ++){
                positionAttendue = positionAttendue.IncrémenterLatitude();
                positionRenvoyée = rover.Avancer();
            }

            expect(positionRenvoyée).toStrictEqual(positionAttendue);
        });

    each([
        [1],
        [2]
    ]).it('ETANT DONNE un rover orienté Sud ' +
        'QUAND il avance %s fois ' +
        'ALORS la composante latitudinale de sa position diminue d\'autant',
        (nombreMouvements: number) => {
        const positionOriginale = new Position(0, 0)
        const rover = new RoverBuilder()
            .AyantPourOrientation(Orientation.Sud)
            .AyantPourPosition(positionOriginale)
            .Build();

            let positionAttendue = positionOriginale;
            let positionRenvoyée = positionOriginale;

            for(let mouvements =0; mouvements < nombreMouvements; mouvements ++){
                positionAttendue = positionAttendue.DécrémenterLatitude();
                positionRenvoyée = rover.Avancer();
            }

        expect(positionRenvoyée).toStrictEqual(positionAttendue);
    });

    each([
        [1],
        [2]
    ]).it('ETANT DONNE un rover orienté Est ' +
        'QUAND il avance %s fois ' +
        'ALORS la composante longitudinale de sa position augmente d\'autant',
        (nombreMouvements: number) => {
            const positionOriginale = new Position(0, 0)
            const rover = new RoverBuilder()
                .AyantPourOrientation(Orientation.Est)
                .AyantPourPosition(positionOriginale)
                .Build();

            let positionAttendue = positionOriginale;
            let positionRenvoyée = positionOriginale;

            for(let mouvements =0; mouvements < nombreMouvements; mouvements ++){
                positionAttendue = positionAttendue.IncrémenterLongitude();
                positionRenvoyée = rover.Avancer();
            }

            expect(positionRenvoyée).toStrictEqual(positionAttendue);
        });

    each([
        [1],
        [2]
    ]).it('ETANT DONNE un rover orienté Ouest ' +
        'QUAND il avance %s fois ' +
        'ALORS la composante longitudinale de sa position diminue d\'autant',
        (nombreMouvements: number) => {
            const positionOriginale = new Position(0, 0)
            const rover = new RoverBuilder()
                .AyantPourOrientation(Orientation.Ouest)
                .AyantPourPosition(positionOriginale)
                .Build();

            let positionAttendue = positionOriginale;
            let positionRenvoyée = positionOriginale;

            for(let mouvements =0; mouvements < nombreMouvements; mouvements ++){
                positionAttendue = positionAttendue.DécrémenterLongitude();
                positionRenvoyée = rover.Avancer();
            }

            expect(positionRenvoyée).toStrictEqual(positionAttendue);
        });
});