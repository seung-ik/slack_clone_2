const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@layouts": path.resolve(__dirname, "src/layouts"),
    "@components": path.resolve(__dirname, "src/components"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@typings": path.resolve(__dirname, "src/typings"),
  })
);
