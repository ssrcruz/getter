import { combineReducers } from 'redux'
import { RECEIVE_BLOGS, REQUEST_BLOGS } from '../actions/blogActions'


export default function reducer(state = {
  blogs: [],
  fetching: false,
  fetched: false,
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
    default:
      return state
  }
}

// export default function reducer(state ={
//   blogs: [],
//   fetching: false,
//   fetched: false,
//   error: null
// }, action) {
//   switch(action.type) {
//     case "FETCH_BLOGS": {
//       return {...state, fetching: true}
//     }
//     case "FETCH_BLOGS_FULFILLED": {
//       return {...state, fetching: false, fetched: true, blogs: action.payload}
//     }
//     case "FETCH_BLOGS_REJECTED": {
//       return {...state, fetching: false, error: action.payload}
//     }
//   }
//   return state
// }


// import {
//   REQUEST_BLOGS, RECEIVE_BLOGS
// } from '../actions/blogActions'
//
//
// export default function blogs(state = {
//   isFetching: false,
//   blogs: []
// }, action) {
//   switch (action.type) {
//     case REQUEST_BLOGS:
//       return Object.assign({}, state, {
//         isFetching: true
//       })
//     case RECEIVE_BLOGS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         blogs: []
//       })
//     default:
//       return state
//   }
// }

// const blog = (state = {
//   blogs: []
// }, action) => {
//   switch (action.type) {
//     case 'ADD_BLOG':
//       return {
//         blogs: [state.blogs, action.payload],
//         // id: action.id,
//         // text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_BLOG':
//       if (state.id !== action.id) {
//         return state
//       }
//
//       return Object.assign({}, state, {
//         completed: !state.completed
//       })
//
//     default:
//       return state
//   }
// }

// const blogs = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_BlOG':
//       return [
//         ...state,
//         blog(undefined, action)
//       ]
//     case 'TOGGLE_BLOG':
//       return state.map(t =>
//         blog(t, action)
//       )
//     default:
//       return state
//   }
// }
//
// export default blogs

// export default function reducer(state={
//     blogs: [],
//     fetching: false,
//     fetched: false,
//     error: null
//   }, action) {
//
//     switch (action.type) {
//       case "FETCH_BLOGS": {
//         return {...state, fetching: true}
//       }
//       case "FETCH_BLOGS_REJECTED": {
//         return {...state, fetching: false, error: action.payload}
//       }
//       case "FETCH_BLOGS_FULFILLED": {
//         return {
//           ...state,
//           fetching: false,
//           fetched: true,
//           blogs: action.payload
//         }
//       }
//       case "ADD_BLOG": {
//         return {
//           ...state,
//           blogs: [...state.blogs, action.payload]
//         }
//       }
//       case "UPDATE_BLOG": {
//         const { id, title, description } = action.payload
//         const newBlogs = [...state.blogs]
//         const blogToUpdate = newBlogs.findIndex(blog => blog.id === id)
//         newBlogs[blogToUpdate] = action.payload;
//
//         return {
//           ...state,
//           blogs: newBlogs
//         }
//       }
//       case "DELETE_BlOG": {
//         return {
//           ...state,
//           blogs: state.blogs.filter(blog => blog.id !== action.payload)
//         }
//       }
//     }
//
//     return state;
// }
