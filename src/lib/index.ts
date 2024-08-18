import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: "k6dkw0iw",
    dataset: "production",
    apiVersion: "2024-08-18",
    useCdn: false
});

export const imageBuilder = imageUrlBuilder(sanityClient)