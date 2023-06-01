import {RoverBuilder} from "./utilities/rover.builder";
import {InterpréteurRover} from "../src/interpréteurRover";
import {CartesianData} from "./utilities/cartesianData";
import {Position} from "../src/geometrie/position";
import {PlanèteInfinie} from "./utilities/planèteInfinie";
import {Point} from "../src/geometrie/point";
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
            })
});