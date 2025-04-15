/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-scheme-1-text": "#000",
        "color-white": "#fff",
        whitesmoke: "#f5f5f5",
        darkslateblue: "#192c51",
        gray: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        "text-tiny-normal": "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
      borderWidth: {
        "stroke-divider-width": "1px",
      },
      padding: {
        "61xl": "80px",
        "45xl": "64px",
        "93xl": "112px",
        "54xl": "73px",
        "13xl": "32px",
        "28xl": "47px",
        xl: "20px",
        lg: "18px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "13xl": "32px",
      lg: "18px",
      "29xl": "48px",
      "5xl": "24px",
      "21xl": "40px",
      "37xl": "56px",
      "10xl": "29px",
      "19xl": "38px",
      lgi: "19px",
      "7xl": "26px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
