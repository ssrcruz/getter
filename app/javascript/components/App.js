import React from 'react'
import BlogList from './BlogList'
import { fetchBlogs } from '../actions/blogActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Layout from '../layouts/application'


class App extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchBlogs())
  }

  render() {
    let { blogs, dispatch } = this.props
    let boundActionCreators = bindActionCreators(fetchBlogs(), dispatch)
    return (
      <div>
        <Layout />
        Blog List
        <BlogList blogs={blogs}
                  {...boundActionCreators} />
      </div>
    )
  }
}

export default connect(
  state => ({ blogs: state.blogs })
)(App)
// import Blog from './Blog';
// import Header from './Header'
// import BlogList from './BlogList'
// import AddBlog from '../containers/AddBlog'
// import VisibleBlogList from '../containers/VisibleBlogList'
// import { fetchBlogs } from '../actions/blogActions'


// function mapStateToProps(state) {
//   return { blogs: state.blogs }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({"FETCH_BLOGS":fetchBlogs}, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProp)(BlogList)

// connect(mapStateToProps, mapDispatchToProps)(BlogList)

// const App = () => (
//   <div>
//     <Header />
//     <AddBlog />
//     <VisibleBlogList />
//   </div>
// )
//
// export default App
  // componentWillMount() {
  //   this.props.dispatch(fetchBlogs());
  // }

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

  // render() {
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

//     return (
//       <div>
//         Header
//         <BlogList blogs={this.props.blogs} />
//       </div>
//     )
//
//   }
// }
