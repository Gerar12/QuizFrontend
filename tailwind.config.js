/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },

      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },

      colors: {
        "vibrant-purple": "#A729F5", // Vibrante Púrpura
        "dark-charcoal": "#313E51", // Carbón Oscuro
        "slate-gray": "#3B4D66", // Gris Pizarra
        "light-slate": "#626C7F", // Pizarra Claro
        "soft-blue": "#ABC1E1", // Azul Suave
        "pale-gray": "#F4F6FA", // Gris Pálido
        "pure-white": "#FFFFFF", // Blanco Puro
        "vivid-red": "#EE5454", // Rojo Vivo
        "bright-green": "#26D782", // Verde Brillante
      },
    },
  },
  plugins: [],
};
