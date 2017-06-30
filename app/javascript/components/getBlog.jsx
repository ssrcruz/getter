import React from 'react'
import BlogPage from './BlogPage'
import { Provider } from 'react-redux'
import store from '../store/configureStore.js'

class getBlog extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BlogPage data={this.props.data}/>
      </Provider>
    )
  }
}


export default getBlog
