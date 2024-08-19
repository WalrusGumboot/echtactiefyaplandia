import { sanityClient } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const entry = await sanityClient.fetch(`*[_type == "galerijEntry" && slug.current == "${params.slug}"] {naam, afbeelding, fotos}`)


    if (entry.length == 1) {
        return {
            entry: entry[0]
        };
    }
    error(404);
}