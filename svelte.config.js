import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

import addEnv from "svelte-kit-env";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  env: addEnv(),

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
