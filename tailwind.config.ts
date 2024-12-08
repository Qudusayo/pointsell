import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color-primary": "#F67F20",
      },
      borderColor: {
        DEFAULT: "#DDDDDD",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
