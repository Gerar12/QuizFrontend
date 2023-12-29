/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
