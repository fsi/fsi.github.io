import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const DateAside = styled.aside`
  float: right;
  font-size: 0.75rem;
  opacity: 0.75;
`
const BottomNav = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`
const BottomNavItem = styled.li`
`
const FeedbackAside = styled.aside`
  margin: 2rem 0 0;
  font-size: 0.75rem;
  opacity: 0.8;
`

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previousPost, nextPost } = pageContext

  console.log('post', previousPost, nextPost, pageContext);

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} />
      <DateAside>{post.frontmatter.postedAt}</DateAside>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.code.body}</MDXRenderer>
      <BottomNav>
        <BottomNavItem>
          {previousPost && <Link to={previousPost.fields.slug} rel='prev'>
            ‹ {previousPost.frontmatter ? previousPost.frontmatter.title : 'Previous'}
          </Link>}
        </BottomNavItem>
        <BottomNavItem>
          {nextPost && <Link to={nextPost.fields.slug} rel='next'>
            {nextPost.frontmatter ? nextPost.frontmatter.title : 'Next'} ›
          </Link>}
        </BottomNavItem>
      </BottomNav>
      <FeedbackAside>
        For feedback, <a href="https://github.com/fsi/fsi.github.io/issues/new">open an issue on the repo</a>,
        or write to fsi2nd+site@gmail.com.<br />
        {/* TODO: add protonmail address */}
        {/* I also have a protonmail account, if that's your schtick<br /> */}
        {/* TODO: add public key for feedback */}
      </FeedbackAside>
    </Layout>
  )
}
export default PostTemplate

export const pageQuery = graphql`
  query PostTemplateQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        postedAt(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
