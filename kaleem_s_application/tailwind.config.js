module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_700: "#5e5e5e",
        blue_gray_100: "#d8d8d8",
        black_900: "#000000",
        blue_700: "#1576d4",
        gray_800: "#4d4d4d",
        teal_900: "#002d58",
        teal_900_3f: "#002d583f",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        gray_300: "#dddbda",
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
