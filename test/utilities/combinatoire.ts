export function *générerCombinaisons(elements: string[], nombreElements: number) : Generator<string> {
    if(nombreElements == 0)
        yield "";
    else {
        for (const elementIndex in elements) {
            const element = elements[elementIndex];
            const combinaisonsRangInférieur =
                générerCombinaisons(elements.slice(1), nombreElements - 1);

            // @ts-ignore
            for (const combinaisonRangInférieur of combinaisonsRangInférieur) {
                yield combinaisonRangInférieur + element;
            }
        }
    }
}