import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

console.log("🥴: Hola from sanity.client.ts");

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});