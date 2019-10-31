/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const sharp = require('sharp')
sharp.simd(false)
sharp.cache(false)
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = function ({ node, actions, getNode }) {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const filePath = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: path.join('/posts/', filePath)
    })
  }
}

const postTemplateFile = path.resolve('./src/templates/Post.jsx')
const mdxQuery = `
  query MdxPostsQuery {
    allMdx(
      sort: { fields: [ frontmatter___postedAt ], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          code {
            scope
          }
        }
      }
    }
  }
`

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions

  const { errors, data } = await graphql(mdxQuery)
  if (errors) throw errors

  const posts = data.allMdx.edges.map(({ node }) => node)
  posts.forEach((post, index) => {
    const previousPost = (index === posts.length - 1) ? null : posts[index + 1]
    const nextPost = (index === 0) ? null : posts[index - 1]

    createPage({
      path: post.fields.slug,
      component: postTemplateFile,
      context: {
        slug: post.fields.slug,
        previousPost,
        nextPost
      }
    })
  })
}
