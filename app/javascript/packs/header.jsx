// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { Routes } from './routes'
// import { Contact } from './contact'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export const Header = () => (
  <Router>
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">RubenOnRails</a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link"><span className="sr-only">(current)</span>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/blogs" component={Blogs}/>
    </div>
  </Router>
)

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

const Blogs = ({ match }) => (
  <div>
    <h2>Blogs</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Blog 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Blog 2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Blog 3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:blogId`} component={Blog}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a blog.</h3>
    )}/>
  </div>
)

const Blog = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Header

// export var Header = React.createClass({
//   render() {
//     return (
//       <div>
//         <Router>
//
//         </Router>
//       </div>
//     )
//   }
// });
