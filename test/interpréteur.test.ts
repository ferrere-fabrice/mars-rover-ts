import {RoverBuilder} from "./utilities/rover.builder";
import {InterpréteurRover} from "../src/interpréteurRover";
import {CartesianData} from "./utilities/cartesianData";
import {Position} from "../src/geometrie/position";
import {PlanèteInfinie} from "./utilities/planèteInfinie";
import {Point} from "../src/geometrie/point";
import {Orientation} from "../src/topologie/orientation";
import {TestPrimitives} from "./utilities/testPrimitives";
const each = require("jest-each").default;

const latitudesDépart = [0, 1];
const longitudesDépart = [0, 1];

describe('FEATURE Interpréteur', () => {
    each(new CartesianData(latitudesDépart, longitudesDépart).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
        "ET un Rover en position %s, %s " +
        "QUAND on lui envoie 'A' " +
        "ALORS le Rover avance",
            (latitude: number, longitude: number) => {
            const positionDépartCommune = new Position(new Point(latitude, longitude), new PlanèteInfinie());

            const roverTémoin = new RoverBuilder().AyantPourPosition(positionDépartCommune).Build();
            const roverInterprété = new RoverBuilder().AyantPourPosition(positionDépartCommune).Build();
            const interpréteur = new InterpréteurRover(roverInterprété);

            const résultatCommande = interpréteur.Interpréter("A");
            const résultatTémoin = roverTémoin.Avancer();

            expect(résultatCommande).toStrictEqual(résultatTémoin);
    });

    each(new CartesianData(latitudesDépart, longitudesDépart).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover en position %s, %s " +
            "QUAND on lui envoie 'R' " +
            "ALORS le Rover avance",
            (latitude: number, longitude: number) => {
                const positionDépartCommune = new Position(new Point(latitude, longitude), new PlanèteInfinie());

                const roverTémoin = new RoverBuilder().AyantPourPosition(positionDépartCommune).Build();
                const roverInterprété = new RoverBuilder().AyantPourPosition(positionDépartCommune).Build();
                const interpréteur = new InterpréteurRover(roverInterprété);

                const résultatCommande = interpréteur.Interpréter("R");
                const résultatTémoin = roverTémoin.Reculer();

                expect(résultatCommande).toStrictEqual(résultatTémoin);
            });

    each(new CartesianData(TestPrimitives.Orientations).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover orienté %s " +
            "QUAND on lui envoie 'D' " +
            "ALORS le Rover tourne à droite",
            (orientationDépart: Orientation) => {
                const roverTémoin = new RoverBuilder().AyantPourOrientation(orientationDépart).Build();
                const roverInterprété = new RoverBuilder().AyantPourOrientation(orientationDépart).Build();
                const interpréteur = new InterpréteurRover(roverInterprété);

                const résultatCommande = interpréteur.Interpréter("D");
                const résultatTémoin = roverTémoin.TourneADroite();

                expect(résultatCommande).toStrictEqual(résultatTémoin);
            });

    each(new CartesianData(TestPrimitives.Orientations).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover orienté %s " +
            "QUAND on lui envoie 'G' " +
            "ALORS le Rover tourne à droite",
            (orientationDépart: Orientation) => {
                const roverTémoin = new RoverBuilder().AyantPourOrientation(orientationDépart).Build();
                const roverInterprété = new RoverBuilder().AyantPourOrientation(orientationDépart).Build();
                const interpréteur = new InterpréteurRover(roverInterprété);

                const résultatCommande = interpréteur.Interpréter("G");
                const résultatTémoin = roverTémoin.TourneAGauche();

                expect(résultatCommande).toStrictEqual(résultatTémoin);
            });

    each(new CartesianData(["B", "VERFEFEF"]).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover " +
            "QUAND on lui envoie une commande invalide " +
            "ALORS une Exception est lancée",
            (commandeInvalide: string) => {
                const interpréteur = new InterpréteurRover(new RoverBuilder().Build());

                const résultatCommande = () => interpréteur.Interpréter(commandeInvalide);

                expect(résultatCommande).toThrow()
            });
});

describe('FEATURE Commandes Multiples', () => {
    each(new CartesianData(TestPrimitives.Orientations, latitudesDépart, longitudesDépart).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover orienté %s en position %s, %s " +
            "QUAND on lui envoie 'DA' " +
            "ALORS le Rover tourne à droite puis avance",
            (orientation: Orientation, latitude: number, longitude: number) => {
                const positionDépartCommune = new Position(new Point(latitude, longitude), new PlanèteInfinie());

                const configurationCommune = new RoverBuilder()
                    .AyantPourPosition(positionDépartCommune)
                    .AyantPourOrientation(orientation);

                const roverTémoin = configurationCommune.Build();
                const roverInterprété = configurationCommune.Build();

                const interpréteur = new InterpréteurRover(roverInterprété);

                const résultatCommande = interpréteur.Interpréter("DA");
                let résultatTémoin = roverTémoin.TourneADroite();
                résultatTémoin = roverTémoin.Avancer();

                expect(résultatCommande).toStrictEqual(résultatTémoin);
            });
});