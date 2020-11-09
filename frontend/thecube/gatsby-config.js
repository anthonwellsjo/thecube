/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'The Cube',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'page2',
        link: '/page-2'
      }
    ],
    plugins: [],
    pathPrefix: "/cube",
  }
}