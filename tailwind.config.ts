import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: colors.rose[600],
        },
        orange: {
          DEFAULT: colors.orange[500],
        },
        yellow: {
          DEFAULT: colors.yellow[500],
        },
        green: {
          DEFAULT: colors.teal[600],
        },
        blue: {
          DEFAULT: colors.sky[600],
        },
        purple: {
          DEFAULT: colors.purple[600],
        },
        gray: {
          DEFAULT: colors.slate[600],
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      page: colors.stone[50],
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
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
