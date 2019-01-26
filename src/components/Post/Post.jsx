import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostHeader = styled.h3`
  display: block;
  align-items: flex-start;
`
const PostHeaderDate = styled.small`
  font-size: 0.5em;
  margin-left: 1em;
  opacity: 0.5;
  &:before {
    content: '[';
  }
  &:after {
    content: ']';
  }
`

export const Post = ({ title, link, excerpt, date }) => {
  return (
    <article>
      <PostHeader>
        <Link to={link}>{title || 'Untitled post'}</Link>
        <PostHeaderDate>{date}</PostHeaderDate>
      </PostHeader>
      <p>{excerpt}</p>
    </article>
  )
}
