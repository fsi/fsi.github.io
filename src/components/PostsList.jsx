import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Post } from '../components/Post'

const postsQuery = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___postedAt], order: DESC}, filter: {frontmatter: {draft: {ne: true}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            postedAt(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export const PostsList = () => {
  return (
    <StaticQuery
      query={postsQuery}
      render={(data) => (
        <>
          {data.allMdx.edges.map(({ node }) => (
            <Post
              key={node.id}
              link={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.postedAt}
              excerpt={node.excerpt}
            />
          ))}
        </>
      )}
    />
  )
}
