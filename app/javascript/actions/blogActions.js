// middleware
import axios from 'axios';

export function fetchBlogs() {
  return function(dispatch) {
    axios.get("/api/v1/blogs.json")
      .then((response) => {
        dispatch({type: "FETCH_BLOGS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_BLOGS_REJECTED", payload: err });
      })
  }
}

export function addBlog(id) {
  return {
    type: 'ADD_BLOG',
    payload: {
      id,
      title,
      description,
    },
  }
}

export function updateBlog(id) {
  return {
    type: 'UPDATE_BLOG',
    payload: {
      id,
      title,
      description,
    },
  }
}

export function deleteBlog(id) {
  return {
    type: 'DELETE_BLOG',
    payload: id }
}
