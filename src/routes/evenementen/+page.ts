import { sanityClient } from "$lib";

export type Evenement = {
    naam: string,
    slug: string,
    fotoAsset: any
    start: Date,
    einde?: Date,
}

function parseerEvenement(raw: any): Evenement {
    return {
        naam: raw.naam,
        slug: raw.slug,
        fotoAsset: raw.afbeelding,
        start: new Date(raw.start),
        einde: raw.einde !== undefined ? new Date(raw.einde) : undefined
    }
}

export async function load({ params }) {
    const opkomendeEvenementen = await sanityClient.fetch(`*[_type == "evenement" && start > now()] {"slug": slug.current, start, einde, naam, afbeelding}`);
    const afgelopenEvenementen = await sanityClient.fetch(`*[_type == "evenement" && start < now()] {"slug": slug.current, start, einde, naam, afbeelding}`);

    if (opkomendeEvenementen || afgelopenEvenementen) {
        return {
            opkomendeEvenementen: opkomendeEvenementen.map(parseerEvenement) as Evenement[],
            afgelopenEvenementen: afgelopenEvenementen.map(parseerEvenement) as Evenement[]
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}