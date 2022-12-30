import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "riyu2i5m",
  apiVersion: "2021-03-25",
  token: process.env.SANITY_API_TOKEN,
  dataset: process.env.NEXT_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
});
//ProjectId: process.env.NEXT_SANITY_PROJECT_ID
