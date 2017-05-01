// middleware
import fetch from 'isomorphic-fetch'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'

// actions covered by user interaction

// actions governed by network requests
function requestBlogs() {
  return {
    type: REQUEST_BLOGS,
    payload: response.data
  }
}

function receiveBlogs(json) {
  return {
    type: RECEIVE_BLOGS,
    blogs: json.data.children.map(child => child.data)
  }
}

// thunk action creator
function fetchBlogs() {
  // thunk middleware knows how to handle fucntions
  // it passes dispatch method as an argument to the function
  // thus making it able to dispatch actions itself
  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestBlogs())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(`/api/v1/blogs.json`)
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveBlogs(json))
      )
    // In a real world app, you also want to
    // catch any error in the network call.
  }
}

function shouldFetchBlogs(state) {
  const blogs = state
  if (!blogs) {
    return true
  } else if (blogs.isFetching) {
    return false
  }
}


export function fetchBlogsIfNeeded() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.
  return (dispatch, getState) =>  {
    if (shouldFetchBlogs(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchBlogs())
    }
  }
}
// export const addBlog = (id, title) => {
//   return {
//     type: 'ADD_BLOG',
//     payload: {
//       id,
//       title
//     },
//   }
// }
//
// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
//
// export const toggleBlog = (id) => {
//   return {
//     type: 'TOGGLE_BLOG',
//     id
//   }
// }
//
// export const updateBlog = (id) => {
//   return {
//     type: 'UPDATE_BLOG',
//     payload: {
//       id,
//       title,
//       description,
//     },
//   }
// }
//
// export const deleteBlog = (id) => {
//   return {
//     type: 'DELETE_BLOG',
//     payload: id }
// }
