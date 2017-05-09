import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/configureStore'
import AppComponent from '../components/App'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppComponent/>
    </Provider>,
    document.getElementById('root')
  )
})
