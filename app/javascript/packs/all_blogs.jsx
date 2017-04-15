import React from 'react'
import ReactDOM from 'react-dom'
import { Blog } from './blog'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NewBlog } from './new_blog'

export class Blogs extends React.Component {
  // How data is stored, the data must be initialized with a constructor
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
    // binds methods so they can access state
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  // How to get the data from the server
  componentDidMount() {
    $.getJSON('/api/v1/blogs.json', (response) => { this.setState({ blogs: response }) })
  }

  // pass a function as a property down the hierarchy
  handleSubmit(blog) {
    // add new blog to the blog array
    var newState = this.state.blogs.concat(blog);
    this.setState({ blogs: newState });
  }

  // Delete data from the server
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/blogs/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeBlogClient(id);
      }
    })
  }
  // handles the update to the server
  handleUpdate(blog) {
    $.ajax({
      url: `/api/v1/blogs/${blog.id}`,
      type: 'PUT',
      data: { blog: blog },
      success: (blog) => {
        this.updateBlogs(blog);
      }
    })
  }

  // replace new update with the old one
  updateBlogs(blog) {
    var blogs = this.state.blogs.filter((i) => { return i.id != blog.id });
    blogs.push(blog);
    this.setState({blogs: blogs});
  }

  // removes data from virtual memory
  removeBlogClient(id) {
    var newblogs = this.state.blogs.filter((blog) => {
      return blog.id != id;
    })

    this.setState({ blogs: newblogs });
  }

  onUpdate(blog) {
    this.handleUpdate(blog);
  }

  render() {
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    var blogs = this.state.blogs.map((blog) => {
      return (
        <Blog key={blog.id}
              blog={blog}
              handleDelete={this.handleDelete.bind(this, blog.id)}
              handleUpdate={this.onUpdate} />
      )
    })

    return (
      <div className="container">
        <NewBlog handleSubmit={this.handleSubmit} />
        <h2>Blogs</h2>
        {blogs}
      </div>
    )
  }
}
