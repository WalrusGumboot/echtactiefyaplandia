import { sanityClient } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const evenement = await sanityClient.fetch(`*[_type == "evenement" && slug.current == "${params.slug}"] {start, einde, naam, afbeelding, body, _updatedAt}`);

    if (evenement.length == 1) {
        return {
            evenement: evenement[0]
        };
    }
    error(404);
}