import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import NewBlog from './new_blog'
import Appbar from 'muicss/lib/react/appbar'
import '../styles/header.scss'

const activeClass = (path) => (location.pathname === path ? 'active' : '')

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Appbar>
            <ul className="nav">
              <li><Link to="/" className={activeClass('/')}>Home</Link></li>
              <li><Link to="/about" className={activeClass('/about')}>About</Link></li>
              <li><Link to="/contact" className={activeClass('/contact')}>Contact</Link></li>
              <li><Link to="/newblog" className={activeClass('/newblog')}>New Blog</Link></li>
            </ul>
          </Appbar>
          <Route exact path="/"/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/newblog" component={NewBlog}/>
        </div>
      </Router>
    )
  }
}

export default Header
