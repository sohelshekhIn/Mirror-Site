module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
          "primary": "#003399",
          "secondary": "#dce024",
          "accent": "#99add6",
          "neutral": "#586585",
          "base-100": "#fff",
          "info": "#5ca0d1",
          "success": "#199473",
          "warning": "#C07F07",
          "error": "#F54260",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}