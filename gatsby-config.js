const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'fsis.site 🐴',
    author: 'Ivan Firsov',
    description: 'fsi\'s personal site and blog',
    siteUrl: 'http://fsis.site',
    social: {
      twitter: 'https://twitter.com/das_fsi',
      github: 'https://github.com/fsi'
    },
    titleShort: '/'
  },
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: { default: path.resolve('./src/components/Layout.js') }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/logo.png',

        appName: 'fsis.site 🐴',
        appDescription: 'fsis.site',
        developerName: 'Ivan Firsov',
        developerUrl: 'https://fsis.site',
        lang: 'en-US',
        start_url: '/',
        background: '#eee0cb',
        theme_color: '#da5f51',
        display: 'minimal-ui'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve('./src/images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve('./src/posts')
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [{
          query: `
            {
              allMdx(
                limit: 100
                sort: { order: DESC, fields: [ frontmatter___postedAt] }
                filter: { frontmatter: { draft: { ne: true } } }
              ) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      postedAt
                    }
                    excerpt
                    html
                  }
                }
              }
            }
          `,
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(({ node }) => ({
              title: node.frontmatter.title,
              date: node.frontmatter.postedAt,
              description: node.excerpt,
              url: site.siteMetadata.siteUrl + node.fields.slug,
              guid: site.siteMetadata.siteUrl + node.fields.slug,
              custom_elements: [{
                'content:encoded': node.html
              }]
            }))
          },
          output: '/feed.xml',
          title: 'fsis.site rss feed'
        }]
      }
    }
  ]
}
