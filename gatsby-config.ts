import type { GatsbyConfig } from "gatsby";

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `何某ノート`,
    siteUrl: `https://the-nanigashi-note.pages.dev`,
    disqusShortName: process.env.DISQUS_SHORTNAME || "",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: "blogs",
          },
          {
            endpoint: "categories",
          },
        ],
      },
    },
  ],
  graphqlTypegen: true,
};

export default config;
