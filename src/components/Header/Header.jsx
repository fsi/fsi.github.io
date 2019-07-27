import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../config/colors'

const Wrapper = styled.header`
  max-width: 720px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0 1rem;
`
const PartialNavLink = props => (
  <Link
    getProps={({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: 'active' } : null
    }}
    {...props}
  />
)
const LinkContainer = styled.span`
  display: inline-block;
  font-size: 1rem;
  margin: 1rem 1rem 1rem 0;
  & .active {
    font-weight: bold;
    color: ${colors.brand}
  }
`

export const Header = (props) => {
  return (
    <Wrapper>
      <nav>
        <LinkContainer>
          <Link to='/' activeClassName='active'>/home/fsi</Link>
        </LinkContainer>
        <LinkContainer>
          <PartialNavLink to='/posts' activeClassName='active'>~/posts</PartialNavLink>
        </LinkContainer>
        <LinkContainer>
          <strike><a href='/cv.en.html'>~/hire</a></strike>
        </LinkContainer>
        <LinkContainer>
          <Link to='/license' activeClassName='active'>~/license</Link>
        </LinkContainer>
      </nav>
    </Wrapper>
  )
}
