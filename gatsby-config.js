const newsletterFeed = require(`./src/utils/newsletterFeed`)
const default_option = require(`./default-options`)
const mdx = true

require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const feed = true
const feedTitle = `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`

module.exports = {
  
  siteMetadata: {
    siteTitle: `UfXpri`,
    siteTitleAlt: `UfXpri Blog - Gatsby Theme`,
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteLanguage: `kr`,
    siteImage: `/banner.jpg`,
    author: `@UfXpri`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: default_option.postsPath,
        path: default_option.postsPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: default_option.pagesPath,
        path: default_option.pagesPath,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    feed && {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed(feedTitle),
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
