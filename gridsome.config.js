// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const lambdaBase =
  process.env.BRANCH === "master"
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL || "http://localhost:9000";

process.env.GRIDSOME_LAMBDA = `${lambdaBase}/.netlify/functions/submit`;

module.exports = {
  siteName: "Gridsome",
  plugins: [{ use: "gridsome-plugin-tailwindcss" }],
};
