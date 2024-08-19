import { sanityClient } from "$lib";

export async function load() {
    const data = await sanityClient.fetch(`*[_type == "galerijEntry"] | order(_createdAt desc) {"slug": slug.current, naam, "foto": fotos[0], "datum": _updatedAt}`);
    if (data) {
        return {
            entries: data
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}