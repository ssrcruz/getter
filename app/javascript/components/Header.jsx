import React from 'react'
import Appbar from 'muicss/lib/react/appbar'
import '../styles/header.scss'
// import { createStore, combineReducers } from 'redux'
// import { Provider } from 'react-redux'
// import { Router, Route, Switch } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
// import reducers from '../reducers'
// import { initReactDevise, AuthRoutes, PrivateRoute } from 'react-devise'
// import reactDeviseReducers from 'react-devise/lib/reducers'

// const {clientResourceName} = initReactDevise()()

// const store = createStore(
//   combineReducers({
//     ..reducers,
//     ..reactDeviseReducers
//   })
// )
const activeClass = (path) => (location.pathname === path ? 'active' : '')


const Header = () => (
  <div>
    <Appbar>
      <ul className="nav">
        <li><a className={activeClass('/')} href="/">Home</a></li>
        <li><a className={activeClass('/about')} href="/about">About</a></li>
        <li><a className={activeClass('/contact')} href="/contact">Contact</a></li>
        <li><a className={activeClass('/newblog')} href="/newblog">New Blog</a></li>
        <li><a className={activeClass('/login')} href="/login">Login</a></li>
        <li><a className={activeClass('/signup')} href="/signup">Signup</a></li>
      </ul>
    </Appbar>
  </div>
)

export default Header
