import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { BlogList } from './BlogList'
// import { Contact } from './contact'
// import { NewBlog } from './new_blog'
// import { App } from './App'
import Appbar from 'muicss/lib/react/appbar'
import '../styles/header.scss'

const activeClass = (path) => (location.pathname === path ? 'active' : '')

class Header extends React.Component {
  render() {
    return (
      <Appbar>
        <ul className="nav">
          <li><a className={activeClass('/')} href="/">Home</a></li>
          <li><a className={activeClass('/about')} href="/about">About</a></li>
          <li><a className={activeClass('/contact')} href="/contact">Contact</a></li>
          <li><a className={activeClass('/newblog')} href="/newblog">New Blog</a></li>
        </ul>
      </Appbar>
    )
  }
}

export default Header
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )
