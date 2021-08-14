import { resolve } from "path";
import { createPage, setupTest } from "@nuxt/test-utils";

describe("MyComponent", () => {
  setupTest({
    testDir: __dirname,
    rootDir: resolve(__dirname, "fixture"),
    browser: true,
    config: {
      components: true,
      buildModules: ["@nuxt/typescript-build"]
    }
  });

  test(
    "render MyComponent (work)",
    async () => {
      const page = await createPage("/work");
      const html = await page.innerHTML("body");
      expect(html).toContain("My component");
    }
  );

  test(
    "render MyComponent (not work)",
    async () => {
      const page = await createPage("/not-work");
      const html = await page.innerHTML("body");
      expect(html).toContain("My component");
    }
  );
});
