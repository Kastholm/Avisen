import { createClient } from "next-sanity";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2024-01-01",
  dataset: "production",
  projectId: "ic4a6jgw",
  useCdn: false,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return imgBuilder.image(source);
}