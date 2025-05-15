/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-title)",
        text: "var(--font-text)",
        // lato: ["Lato", "sans-serif"],
        // montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // Title & Subtitle Colors
        "title-emphasis": "var(--title-emphasis)",
        "subtitle-emphasis": "var(--subtitle-emphasis)",

        // Text Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",

        // CTA Colors
        "background-CTA": "var(--background-CTA)",

        // Block Colors
        "block-primary": "var(--background-Block-primary)",
        "block-secondary": "var(--background-Block-secondary)",

        // Button Colors
        "button-primary": "var(--background-Button-primary)",
        "button-secondary": "var(--background-Button-secondary)",
      },
    },
  },
  plugins: [],
};
