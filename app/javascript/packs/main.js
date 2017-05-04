import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/configureStore'
import AppComponent from '../components/App'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Header from '../components/Header'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppComponent/>
    </Provider>,
    document.getElementById('root')
  )
})
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Root />,
//     document.getElementById('root')
//   )
// })

// store.dispatch({type: 'FETCH_BLOGS_FULFILLED'})
