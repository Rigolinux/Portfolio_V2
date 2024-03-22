/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
    colors: {
        CusGreen: "#28e98c",
        CusYellow: "#e4af12",
        CusOrange: "#fe6f1d",
        Cuslight_blue: "#14c5fd",
        CusPurple: "#a14cfb",
        CusRed: "#f31313",
        CusPink: "#ff99cc",
        CusGrey: "#c0c0c0",
        CusBlue: "#1338f3",
    
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
  corePlugins: {
    aspectRatio: false,
  },
}

