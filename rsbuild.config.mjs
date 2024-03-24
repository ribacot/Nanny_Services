import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginStylus } from "@rsbuild/plugin-stylus";
// import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
	plugins: [pluginReact(), pluginImageCompress(), pluginStylus()],
	html: { template: "./public/index.html" },
});
