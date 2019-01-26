import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

export const SEO = ({ description, lang = 'en', meta = [], keywords = [], title }) => {
  return (
    <StaticQuery
      query={seoQuery}
      render={({ site: { siteMetadata } }) => (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          defaultTitle={siteMetadata.title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: description || siteMetadata.description
            },
            {
              property: 'og:title',
              content: title
            },
            {
              property: 'og:description',
              content: description || siteMetadata.description
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              name: 'twitter:card',
              content: 'summary'
            },
            {
              name: 'twitter:creator',
              content: siteMetadata.author
            },
            {
              name: 'twitter.title',
              content: title
            },
            {
              name: 'twitter.description',
              content: description || siteMetadata.description
            }
          ]
            .concat(keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [])
            .concat(meta)
          }
        />
      )}
    />
  )
}

const seoQuery = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        social {
          twitter
        }
      }
    }
  }
`
