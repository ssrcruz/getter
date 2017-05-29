import $ from 'jquery'
import 'whatwg-fetch'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
export const ADD_BLOG = 'ADD_BLOG'
export const DELETE_BLOG = 'DELETE_BLOG'
export const DELETE_BLOG_FULFILLED = 'DELETE_BLOG_FULFILLED'


export function addBlog(data) {
  // const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders())
  return function (dispatch) {
    const request = fetch(`/api/v1/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      dispatch(handleAdd(data))
    })
  }
  // const request = $.ajax({
  //   url: 'api/v1/blogs',
  //   type: 'POST',
  //   data: data,
  //   dataType: 'json'
  // })
  // return {
  //   type: ADD_BLOG,
  //   payload: request
  // }
}

function handleAdd(data) {
  return {
    type: ADD_BLOG,
    blog: data
  }
}
export function handleDelete(id) {
  return {
    type: DELETE_BLOG,
    blogId: id
  }
}

export function deleteBlogSuccess() {
  return {
    type: DELETE_BLOG_FULFILLED
  }
}

export function deleteBlog(id) {
  return function (dispatch) {
    const request = fetch(`/api/v1/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      dispatch(handleDelete(id))
    }).then(() => {
      dispatch(deleteBlogSuccess())
    }).catch(error => {
      throw(error)
    })
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
