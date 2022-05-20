module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('/images/design-elements/circle.svg')",
        triangle: "url('/images/design-elements/corner.svg')",
        zigzag: "url('/images/design-elements/zig-zag.svg')",
        polkadots2: "url('/images/design-elements/polka-dots-2.svg')",
      },
      fontFamily: {
        sans: ["Poppins", "san-serif"],
      },
    },
  },
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#17429F",
          secondary: "#1d1d29",
          accent: "#FF9D00",
          neutral: "#191D24",
          "base-100": "#fafbfa",
          info: "#00b1fd",
          success: "#24e170",
          warning: "#FBBD23",
          error: "#F84C4C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
