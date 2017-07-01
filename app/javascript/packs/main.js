import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/configureStore'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import AppComponent from '../components/App'
import Contact from '../components/Contact'
import About from '../components/About'
import BlogForm from '../components/BlogForm'
import getBlog from '../components/getBlog'
import Home from '../components/Home'
import SignUpPage from '../components/SignUpPage'
import LoginPage from '../components/LoginPage'
import WebpackerReact from 'webpacker-react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Turbolinks from 'turbolinks'

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin()

Turbolinks.start()

WebpackerReact.setup({
  Home,
  Contact,
  About,
  BlogForm,
  getBlog,
  SignUpPage,
  LoginPage
})
