import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: colors.orange[700],
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.rose,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.teal,
      blue: colors.sky,
      purple: colors.purple,
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
