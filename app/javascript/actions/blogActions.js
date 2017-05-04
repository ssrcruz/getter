// import axios from 'axios'
import fetch from 'isomorphic-fetch'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'

function requestBlogs() {
  return {
    type: REQUEST_BLOGS
  }
}

function receiveBlogs(json) {
  return {
    type: RECEIVE_BLOGS,
    blogs: json
  }
}

export function fetchBlogs() {
  return function (dispatch) {
    dispatch(requestBlogs())
    return fetch(`/api/v1/blogs.json`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveBlogs(json)))
  }
}

// export function fetchBlogs(){
//   return function(dispatch){
//     axios.get('/api/v1/blogs.json')
//       .then((response) => {
//         dispatch({type: 'FETCH_BLOGS_FULFILLED', data: response.data });
//       })
//       .catch((err) => {
//         dispatch({type: 'FETCH_BLOGS_REJECTED', payload: err});
//       })
//   }
// }
