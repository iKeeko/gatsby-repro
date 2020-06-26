module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.gatsbyjs.org/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`200`, `300`, `400`, `600`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`300`, `400`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "your-shop",
        accessToken: "key",
        verbose: true,
        paginationSize: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.gatsbyjs.org/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3ba53a`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "google-analytics-id",
        head: false,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `mailchimp-url`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "facebook-pixel-id",
      },
    },
  ],
}
