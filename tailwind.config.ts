import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {},
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
