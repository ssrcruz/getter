import React from 'react';
import { connect } from 'react-redux';
// import Blog from './Blog';
import BlogList from './BlogList';
import { fetchBlogs } from '../actions/blogActions';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { blogs: state.blogs }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({"FETCH_BLOGS":fetchBlogs}, dispatch)
}

// Blogs.propTypes = {
//   fetchBlogs: PropTypes.func.isRequired
//   dispatch: PropTypes.func.isRequired
// }
// export default connect(mapStateToProps, mapDispatchToProp)(BlogList)

connect(mapStateToProps, mapDispatchToProps)(BlogList)

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchBlogs());
  }

  // fetchBlogs() {
  //   this.props.dispatch(fetchBlogs())
  // }
  // How data is stored, the data must be initialized with a constructor
  // constructor(props) {
  //   super(props);
  //   this.state = { blogs: [] };
    // binds methods so they can access state
    // this.handleSubmit = this.handleSubmit.bind(this);
  //   this.onUpdate = this.onUpdate.bind(this);
  // }

  // How to get the data from the server
  // componentDidMount() {
  //   $.getJSON('/api/v1/blogs.json', (response) => { this.setState({ blogs: response }) })
  // }

  // Delete data from the server
  // handleDelete(id) {
  //   $.ajax({
  //     url: `/api/v1/blogs/${id}`,
  //     type: 'DELETE',
  //     success:() => {
  //       this.removeBlogClient(id);
  //     }
  //   })
  // }
  // handles the update to the server
  // handleUpdate(blog) {
  //   $.ajax({
  //     url: `/api/v1/blogs/${blog.id}`,
  //     type: 'PUT',
  //     data: { blog: blog },
  //     success: (blog) => {
  //       this.updateBlogs(blog);
  //     }
  //   })
  // }

  // replace new update with the old one
  // updateBlogs(blog) {
  //   var blogs = this.state.blogs.filter((i) => { return i.id != blog.id });
  //   blogs.push(blog);
  //   this.setState({blogs: blogs});
  // }

  // removes data from virtual memory
  // removeBlogClient(id) {
  //   var newblogs = this.state.blogs.filter((blog) => {
  //     return blog.id != id;
  //   })
  //
  //   this.setState({ blogs: newblogs });
  // }

  // onUpdate(blog) {
  //   this.handleUpdate(blog);
  // }

  render() {
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    // const { blogs } = this.props.blogs;


    // const mappedBlogs = blogs.map(blog => {
      // return (
      //   <Blog blogs={this.props.blogs} />
      // )
    // })

    // var blogs = this.state.blogs.map((blog) => {
    //   return (
    //     <Blog key={blog.id}
    //           blog={blog}
    //           handleDelete={this.handleDelete.bind(this, blog.id)}
    //           handleUpdate={this.onUpdate} />
    //   )
    // })

    return (
      <div>
        Header
        <BlogList blogs={this.props.blogs} />
      </div>
    )

  }
}
