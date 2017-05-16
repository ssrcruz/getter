import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import NewBlog from './new_blog'

const BlogForm = () => (
  <Provider store={store}>
    <NewBlog />
  </Provider>
)

export default BlogForm
