import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => {
  
  return (
  <header className="navbar"
    style={{
      background: `#F9B5AC`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
    className="navbar-start"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
        className="navbar-item"
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <a className="navbar-item" href="https://www.instagram.com/hairbycierahearn/">@hairbycierahearn</a>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
