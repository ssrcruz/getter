import React from 'react'
import ReactDOM from 'react-dom'
// import { Header } from '../components/header'
import { BlogList } from '../components/BlogList'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from '../store'
import { Provider } from "react-redux"
import AppComponent from '../components/App.js'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppComponent />
    </Provider>,
    document.getElementById('root')
  )
})

// store.dispatch({type: 'FETCH_BLOGS'})
