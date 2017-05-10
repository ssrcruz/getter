import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import AppComponent from './App'

const HomeWithProvider = () => (
  <Provider store={store}>
    <AppComponent/>
  </Provider>
)

export default HomeWithProvider
