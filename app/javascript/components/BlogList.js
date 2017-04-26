import React from 'react'
import { PropTypes } from 'prop-types'
import Blog from './Blog'


const BlogList = ({ blogs, onBlogClick }) => (
  <ul>
    {blogs.map(blog =>
      <Blog
        key={blog.id}
        {...blog}
        onClick={() => onBlogClick(blog.id)}
      />
    )}
  </ul>
)

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onBlogClick: PropTypes.func.isRequired
}

export default BlogList

  // componentWillMount() {
  //   this.props.dispatch(fetchBlogs());
  // }
  // render() {
  //   if(Object.getOwnPropertyNames(this.props.blogs).length === 0){
  //     return (<div></div>)
  //   }
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    // const { blogs } = this.props.blogs;


    // const mappedBlogs = blogs.map(blog => {
    // var mappedBlogs = this.props.blogs.map(blog => {
    //   return (
    //     <Blog title={blog.title} description={blog.description} id={blog.id}>
    //       {blog.title}
    //     </Blog>
    //   )
    // })

    // })

    // var blogs = this.state.blogs.map((blog) => {
    //   return (
    //     <Blog key={blog.id}
    //           blog={blog}
    //           handleDelete={this.handleDelete.bind(this, blog.id)}
    //           handleUpdate={this.onUpdate} />
    //   )
    // })

//     return (
//       <div className="container">
//         <h2>Blogs</h2>
//         {mappedBlogs}
//       </div>
//     )
//
//   }
// }
