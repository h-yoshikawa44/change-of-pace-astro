import { defineConfig, presetUno, presetWebFonts, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sawarabi: [
          "Sawarabi Mincho",
          "Verdana",
          { name: "sans-serif", provider: "none" },
        ],
        fatface: ["Abril Fatface", { name: "sans-serif", provider: "none" }],
      },
    }),
    presetIcons(),
  ],
  theme: {
    colors: {
      brand: {
        primary: "#202020",
        start: "#323232",
        end: "#0e0e0e",
      },
    },
  },
});
