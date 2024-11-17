/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      kodeMono: ["Kode Mono"],
      rubikScribble: ["Rubik Scribble"],
      montserrat: ["Montserrat"],
      lobster: ["Lobster"],
    },
    extend: {
      colors: {
        primaryDark: "#2E4057",
        primaryTextDark: "#CAFFB9",
        primaryGreenDark: "#66A182",
        lightGreen: "#AEF78E",
        yellowGreen: "#C0D461",
        teaGreen: "#CAFFB9",
      },
      boxShadow: {
        article: "-20px 2px 19px 5px rgba(0,0,0,1)",
      },
      keyframes: {
        bookFlipForward: {
          "0%": {
            transform: "rotateY(0deg)",
            width: "50%",
          },
          "100%": {
            transform: "rotateY(-180deg)",
            width: "50%",
            transformStyle: "preserve-3d",
          },
        },
        bookFlipReverse: {
          "0%": {
            transform: "rotateY(-180deg)",
            transformStyle: "preserve-3d",
            width: "50%",
          },
          "100%": {
            transform: "rotateY(0deg)",
            width: "50%",
            transformStyle: "preserve-3d",
          },
        },
      },
      animation: {
        bookFlipForward:
          "bookFlipForward 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards",
        bookFlipReverse:
          "bookFlipReverse 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards",
      },
    },
  },
  plugins: [],
};
