import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../containers/Root'
// import { Header } from '../components/header'
// import { BlogList } from '../components/BlogList'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import store from '../store'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import blogApp from '../reducers'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
})

// store.dispatch({type: 'FETCH_BLOGS'})
