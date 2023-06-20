export class Entier {
    private _valeur: number;
    public static readonly Zéro: Entier = new Entier(0);

    public constructor(valeur: number) {
        if(Math.round(valeur) !== valeur)
            throw new Error("Not an integer");

        this._valeur = Entier.RedresserZéroNégatif(valeur);
    }

    public EstZéro() {
        return this._valeur == 0;
    }

    public Décrémenter() {
        return new Entier(this._valeur - 1);
    }

    private static RedresserZéroNégatif(nombre : number) {
        if(nombre == -0) return 0;
        return nombre;

    }

    Incrémenter() {
        return new Entier(this._valeur + 1);
    }

    Additionner(other: Entier) {
        return new Entier(this._valeur + other._valeur);
    }

    Modulo(other: Entier) {
        return new Entier(this._valeur % other._valeur);
    }

    Inverser() {
        return new Entier(-this._valeur);
    }
}