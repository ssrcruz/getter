import { combineReducers } from 'redux'
import { RECEIVE_BLOGS,
         REQUEST_BLOGS,
         ADD_BLOG,
         DELETE_BLOG,
         DELETE_BLOG_FULFILLED } from '../actions/blogActions'


export default function reducer(state = {
  blogs: [],
  fetching: false,
  fetched: false,
  deleted: false,
  error: null
}, action) {
  switch (action.type) {
    case "REQUEST_BLOGS":
      return Object.assign({}, state, {
        fetching: true
      })
    case "RECEIVE_BLOGS":
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        blogs: action.blogs
      })
    case "ADD_BLOG":
      return Object.assign({}, state, {
        blogs: [...state.blogs, action]
      })
    case "DELETE_BLOG":
      return Object.assign({}, state, {
        blogs: [...state.blogs.filter(blog => blog.id !== action.blogId)]
      })
    case "DELETE_BLOG_FULFILLED":
      return Object.assign({}, state, {
        deleted: true
      })
    default:
      return state
  }
}
