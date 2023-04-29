import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        mincho: { name: "Sawarabi Mincho" },
        fatface: { name: "Abril Fatface" },
      },
    }),
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
