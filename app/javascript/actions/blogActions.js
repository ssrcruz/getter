import fetch from 'isomorphic-fetch'
import $ from 'jquery'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
export const ADD_BLOG = 'ADD_BLOG'


export function addBlog(data) {
  const request = $.ajax({
    url: 'api/v1/blogs',
    type: 'POST',
    data: data,
    dataType: 'json'
  })
  // const request = fetch(`/api/v1/blogs.json`, {
  //   method: 'POST',
  //   body: data,
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // })
  return {
    type: ADD_BLOG,
    payload: request
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
