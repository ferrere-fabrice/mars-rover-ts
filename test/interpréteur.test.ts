import {RoverBuilder} from "./utilities/rover.builder";
import {InterpréteurRover} from "../src/rover/interpréteurRover";
import {CartesianData} from "./utilities/cartesianData";
import {Orientation} from "../src/topologie/orientations";
import {TestPrimitives} from "./utilities/testPrimitives";
import {Rover} from "../src/rover/rover";
import {générerCombinaisons} from "./utilities/combinatoire";
import {PositionBuilder} from "./utilities/position.builder";
const each = require("jest-each").default;

const latitudesDépart = [0, 1];
const longitudesDépart = [0, 1];

const commandesTestables = ['A', 'R' ,'D', 'G'];
const nombresOpérandes = [2, 3, 5];

function générerCommandesComplexes(){
    let commandes :string[] = [];

    for (const nombreOpérandes of nombresOpérandes) {
        const combinaisons = générerCombinaisons(commandesTestables, nombreOpérandes);
        // @ts-ignore
        for (const combinaison of combinaisons) commandes.push(combinaison);
    }

    return commandes;
}

describe('FEATURE Interpréteur', () => {
    each(new CartesianData(latitudesDépart, longitudesDépart).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
        "ET un Rover en position %s, %s " +
        "QUAND on lui envoie 'A' " +
        "ALORS le Rover avance",
            (latitude: number, longitude: number) => {
            const positionDépartCommune = new PositionBuilder()
                    .AyantPourCoordonnées(latitude, longitude)
                    .Build();

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
                const positionDépartCommune = new PositionBuilder()
                    .AyantPourCoordonnées(latitude, longitude)
                    .Build();

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
    each(new CartesianData(TestPrimitives.Orientations, latitudesDépart, longitudesDépart, générerCommandesComplexes()).toTestCases())
        .it("ETANT DONNE un Interpréteur " +
            "ET un Rover orienté %s en position %s, %s " +
            "QUAND on lui envoie plusieurs commandes %s " +
            "ALORS le Rover se comporte comme si chacune avait été envoyée à la suite",
            (orientation: Orientation, latitude: number, longitude: number, commande: string) => {
                const positionDépartCommune = new PositionBuilder()
                    .AyantPourCoordonnées(latitude, longitude)
                    .Build();

                const configurationCommune = new RoverBuilder()
                    .AyantPourPosition(positionDépartCommune)
                    .AyantPourOrientation(orientation);

                const roverTémoin = configurationCommune.Build();
                const roverTesté = configurationCommune.Build();

                const interpréteurTesté = new InterpréteurRover(roverTesté);
                const interpréteurTémoin = new InterpréteurRover(roverTémoin);

                let résultatTémoin: Rover|undefined = undefined;

                for (const commandeSimple of commande) {
                    résultatTémoin = interpréteurTémoin.Interpréter(commandeSimple);
                }

                const résultatCommande = interpréteurTesté.Interpréter(commande);

                expect(résultatCommande).toStrictEqual(résultatTémoin);
            });
});