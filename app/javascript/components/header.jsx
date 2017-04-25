import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { BlogList } from './BlogList'
import { Contact } from './contact'
import { NewBlog } from './new_blog'
import { App } from './App'


export class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <Link to='/'>RubenOnRails</Link>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/newblog">Create New Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blogs" component={App}/>
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
