/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "blog",
        protocol: "http",
        hostingWPCOM: false,
      },
      includedRoutes: [
        "**/menus",
        "**/categories",
        "**/posts",
        "**/pages",
        "**/media",
        "**/tags",
        "**/taxonomies",
        "**/users",
      ],
    },
  ],
  siteMetadata: {
    title: "Blog",
  },
}
