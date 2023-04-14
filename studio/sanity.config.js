import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { richText } from "./schemas/richText";
import { resolveProductionUrl } from "./resolveProductionUrl";
import { author } from "./schemas/author";
import { post } from "./schemas/post";
import { hero } from "./schemas/heroPost";
import { markdownSchema } from "sanity-plugin-markdown";
import { menu, menuItem } from "./schemas/menu"; 
import { page } from "./schemas/page";
import { footer } from "./schemas/footer";
import { seo } from "./schemas/seo";
const title =
  import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Blog with Sanity.io";
const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [author, post, hero, menu, menuItem, page, richText,footer,seo],
  },
  document: {
    productionUrl: resolveProductionUrl,
  },
  plugins: [
    deskTool({}),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
    markdownSchema(),
  ],
});
