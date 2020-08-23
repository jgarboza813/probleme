/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  ...{
    resolve: "gatsby-source-filesystem",
    options: {
      name: "fonts",
      path: `${__dirname}/static/fonts/`
    }
  }
}
