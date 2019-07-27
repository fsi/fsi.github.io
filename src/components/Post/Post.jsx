import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostHeader = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: flex-start;
  & > a { text-decoration: none; }
`
const PostHeaderDate = styled.small`
  font-size: 0.5em;
  margin: 0 1em;
  opacity: 0.5;
  min-width: 10em;
  align-self: center;
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
    </article>
  )
}
