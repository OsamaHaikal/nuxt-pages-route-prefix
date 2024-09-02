import { join } from "node:path";
import { defineNuxtModule, useLogger } from "@nuxt/kit";

export interface ModuleOptions {
  /**
   * The prefix to be added to the routes.
   *
   * This can be configured separately for each layer in their respective Nuxt config files.
   *
   * Examples:
   * - Simple prefix: "/admin"
   * - Dynamic prefix: "/:name/dashboard"
   *
   * Special placeholders:
   * - any valid vue router dynamic path is supported
   *
   * If not provided for a layer, no prefix will be added to that layer's routes.
   *
   * @default ""
   */
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "pages-route-prefix",
    configKey: "pagesRoutePrefix",
  },
  setup(_options, nuxt) {
    const logger = useLogger("pages-route-prefix");

    logger.info("Initializing...");

    const layers = nuxt.options._layers.map(layer => layer);

    nuxt.hook("pages:extend", (pages) => {
      pages.forEach((page) => {
        const matchingLayer = layers.find(layer =>
          page.file?.startsWith(join(layer.config.srcDir, "pages")),
        );

        if (matchingLayer) {
          const layerPrefix: string | undefined = matchingLayer?.config.pagesRoutePrefix?.prefix;

          if (layerPrefix) {
            let newPath = layerPrefix;

            newPath = newPath.replace(/:(\w+)/g, (_, param) => {
              return `:${param}`;
            });

            if (newPath.endsWith("/") && page.path.startsWith("/")) {
              newPath = newPath.slice(0, -1);
            }

            page.path = `${newPath}${page.path}`;
          }
        }
      });
    });
  },
});
