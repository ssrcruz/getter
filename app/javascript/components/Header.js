import React from 'react'
import Appbar from 'muicss/lib/react/appbar'
import '../styles/header.scss'

const activeClass = (path) => (location.pathname === path ? 'active' : '')

const Header = () => (
  <div>
    <Appbar>
      <ul className="nav">
        <li><a className={activeClass('/')} href="/">Home</a></li>
        <li><a className={activeClass('/about')} href="/about">About</a></li>
        <li><a className={activeClass('/contact')} href="/contact">Contact</a></li>
        <li><a className={activeClass('/newblog')} href="/newblog">New Blog</a></li>
      </ul>
    </Appbar>
  </div>
)

export default Header
