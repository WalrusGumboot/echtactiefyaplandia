import { sanityClient } from "$lib";

export async function load({ params }) {
    const data = await sanityClient.fetch(`*[_type == "lid"] | order(_createdAt asc)`);
  
    if (data) {
      return {
        leden: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }