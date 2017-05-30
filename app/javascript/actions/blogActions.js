import $ from 'jquery'
import 'whatwg-fetch'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
export const ADD_BLOG = 'ADD_BLOG'
export const ADD_BLOG_SUCCESS = 'ADD_BLOG_SUCCESS'
export const DELETE_BLOG = 'DELETE_BLOG'
export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS'


export function addBlog(data) {
  return function (dispatch) {
    const request = fetch(`/api/v1/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(blog => dispatch(handleAdd(blog)))
      .then(() => { dispatch(addBlogSuccess()) })
  }
}

function handleAdd(blog) {
  return {
    type: ADD_BLOG,
    blog: blog
  }
}

function addBlogSuccess() {
  return {
    type: ADD_BLOG_SUCCESS
  }
}

export function deleteBlog(id) {
  return function (dispatch) {
    const request = fetch(`/api/v1/blogs/${id}`, {
      method: 'DELETE'
    })
      .then(() => { dispatch(handleDelete(id)) })
      .then(() => { dispatch(deleteBlogSuccess()) })
      .catch(error => { throw(error) })
  }
}


function handleDelete(id) {
  return {
    type: DELETE_BLOG,
    blogId: id
  }
}

function deleteBlogSuccess() {
  return {
    type: DELETE_BLOG_SUCCESS
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

function fetchBlogsFailure(error) {
  return {
    type: FETCH_BLOGS_FAILURE,
    blogs: error
  }
}
