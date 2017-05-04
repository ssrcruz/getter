import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Blog from './Blog'

const BlogList = ({blogs}) => (
  <ul>
    {blogs.map(blog =>
      <Blog {...blog} key={blog.id} />
    )}
  </ul>
)

export default BlogList
// export default class BlogList extends Component {
//   render() {
//     var blogNodes = blogs.map((blog) => {
//       return (
//         <Blog title={blog.title} description={blog.description} id={blog.id}>
//           {blog.title}
//         </Blog>
//       )
//     })
//     return (
//       <div>
//         <h1>Blogs</h1>
//         {blogNodes}
//       </div>
//     )
//   }
// }
  // render() {
  //   return (
  //     <ul>
  //       {this.props.blogs.map((post, i) =>
  //         <li key={i}>{blog.title}{blog.description}</li>
  //       )}
  //     </ul>
  //   )
  // }
// }
//
// BlogList.propTypes = {
//   blogs: PropTypes.array.isRequired
// }


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
