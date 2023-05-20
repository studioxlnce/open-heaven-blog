'use client';

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Please log in to load preview data`);
};

console.log("🤔: Hola from sanity.preview.ts");


if (!projectId || !dataset) {
    console.log("🤐: sanity.preview.ts says \"Go Away!\"");
    throw new Error(`Missing projectId or dataset. Please ensure you've set them in your .env file.`);
} else {
    console.log("👾: sanity.preview.ts says \"Wateva!\"");
};

export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly,});