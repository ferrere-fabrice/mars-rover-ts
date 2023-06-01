export class CartesianData{
    private readonly _args: any[][];

    public constructor(...args: any[][]) {
        this._args = args;
    }

    public toTestCases(): any[][] {
        let combinaisons : any[][] = [];

        for(const valeurPremierParametre of this._args[0]){
            combinaisons.push([valeurPremierParametre]);
        }

        for(const paramètreSupplémentaire of this._args.slice(1))
            combinaisons = this.addParameter(combinaisons, paramètreSupplémentaire);

        return combinaisons;
    }

    private addParameter (combinaisons : any[][], paramètre: any[]) : any[][]
    {
        let result : any[][] = [];

        for (const valeur of paramètre) {
            for (const combinaison of combinaisons) {
                let lineResult = [];

                for (const element of combinaison){
                    lineResult.push(element);
                }

                lineResult.push(valeur);
                result.push(lineResult);
            }
        }

        return result;
    }
}