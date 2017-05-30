import React from 'react'
import Blog from './Blog'

const BlogList = ({blogs}) => (
  <ul>
    {blogs.map(blog =>
      <Blog {...blog} key={blog.id} />
    )}
  </ul>
)

export default BlogList
