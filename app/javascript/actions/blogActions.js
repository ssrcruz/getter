// middleware
import axios from 'axios';

export const fetchBlogs = () => {
  return (dispatch) => {
    axios.get("/api/v1/blogs.json")
      .then((response) => {
        dispatch({type: "FETCH_BLOGS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_BLOGS_REJECTED", payload: err });
      })
  }
}

export const addBlog = (id, title) => {
  return {
    type: 'ADD_BLOG',
    payload: {
      id,
      title
    },
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleBlog = (id) => {
  return {
    type: 'TOGGLE_BLOG',
    id
  }
}

export const updateBlog = (id) => {
  return {
    type: 'UPDATE_BLOG',
    payload: {
      id,
      title,
      description,
    },
  }
}

export const deleteBlog = (id) => {
  return {
    type: 'DELETE_BLOG',
    payload: id }
}
