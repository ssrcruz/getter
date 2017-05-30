import { combineReducers } from 'redux'
import { RECEIVE_BLOGS,
         REQUEST_BLOGS,
         ADD_BLOG,
         ADD_BLOG_SUCCESS,
         DELETE_BLOG,
         DELETE_BLOG_SUCCESS } from '../actions/blogActions'


export default function reducer(state = {
  blogs: [],
  fetching: false,
  fetched: false,
  deleted: false,
  added: false,
  error: null
}, action) {
  switch (action.type) {
    case "REQUEST_BLOGS":
      return {
        ...state,
        fetching: true
      }
    case "RECEIVE_BLOGS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        blogs: action.blogs
      }
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.blog]
      }
    case "ADD_BLOG_SUCCESS":
      return {
        ...state,
        added: true
      }
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: [...state.blogs.filter(blog => blog.id !== action.blogId)]
      }
    case "DELETE_BLOG_SUCCESS":
      return {
        ...state,
        deleted: true
      }
    default:
      return state
  }
}
