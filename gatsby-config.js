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
        baseUrl: "digbiz.local",
        protocol: "http",
        hostingWPCOM: false,
      },
      includedRoutes: [
        "/*/*/categories",
        "/*/*/posts",
        "/*/*/pages",
        "/*/*/media",
        "/*/*/tags",
        "/*/*/taxonomies",
        "/*/*/users",
        "/*/*/menus",
      ],
    },
  ],
  siteMetadata: {
    title: "Blog",
  },
}
