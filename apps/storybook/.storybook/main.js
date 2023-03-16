const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, {}) {
    /** Instead of using the compiled output from @acme/ui, we
     * set an alias to access the modules directly, in order to
     * keep react-docgen happy
     */
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@acme/ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
};
