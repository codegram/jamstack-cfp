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
  pathPrefix: process.env.BASE_PATH || "",
  plugins: [
    { use: "gridsome-plugin-tailwindcss" },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Submission",
        path: "./submissions/*.json",
      },
    },
    {
      use: "@gridsome/source-graphql",
      options: {
        url: "https://api.github.com/graphql",
        fieldName: "github",
        typeName: "githubTypes",

        headers: {
          Authorization: `Bearer ${process.env.GH_TOKEN_PERSONAL}`,
        },
      },
    },
  ],
};
