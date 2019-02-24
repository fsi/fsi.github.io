import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

export const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <main>
          {children}
        </main>
        <footer>
          &copy; <a href='https://github.com/fsi'>FSi</a> 2019
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
