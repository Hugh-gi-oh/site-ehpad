import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  //site: "https://example.com", // <-- remplace par l'URL finale du site
  integrations: [tailwind(), sitemap()],
});
