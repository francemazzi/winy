import { createClient, createCurrentUserHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export default config({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_SANITY_DATASET || "production",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
});

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);