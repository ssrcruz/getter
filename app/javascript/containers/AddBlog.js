import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogActions'

let AddBlog = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
        }
        dispatch(addBlog(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit" >
          Add Blog
        </button>
      </form>
    </div>
  )
}

AddBlog = connect()(AddBlog)

export default AddBlog
