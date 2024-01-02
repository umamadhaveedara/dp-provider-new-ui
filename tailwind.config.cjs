const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        headertextbg: "#778bdf",
        logobg: "#eef8fe",
        labelcolor: "#425670",
        loginbtn: "#30bed1",
        linkcolor: "#1EB9CD",
        bordercolor: "#cdc5c5",
        // flowbite-svelt
      },
      fontFamily: {
        Satoshi: ["Satoshi"],
      },
    },
  },
};

module.exports = config;
