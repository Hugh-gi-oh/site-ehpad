module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f6f4e", // ton vert doux
        accent: "#6fae86",
        background: "#CADACBff", // ton vert très clair
        secondary: "#e9fdecff", // ton beige clair
        greenSoft: "#a9c99fff",
        greenSoftLight: "#f9fdfaff",
        orangeSoft: "#ffebdaff",
        orangeSoftLight: "#fffbf8ff",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
