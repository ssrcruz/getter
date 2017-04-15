import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Blogs } from './all_blogs'
import { Contact } from './contact'
import { NewBlog } from './new_blog'

export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="container">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link to='/'className="navbar-brand">RubenOnRails</Link>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blogs" onClick={this.props.handleClick} className="nav-link">Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/newblog" className="nav-link">Create New Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/newblog" component={NewBlog}/>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
