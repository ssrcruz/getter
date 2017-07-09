import React from 'react'
import Blog from './Blog'
import Layout from '../layouts/application.jsx'
import { fetchBlog } from '../actions/blogActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
  }
  // componentDidMount() {
  //   this.props.fetchBlog(this.props.data.id)
  // }
  render() {
    const blog = this.state
    return (
      <div>
        <Layout />
        <Blog {...blog} key={this.state.id}/>
      </div>
    )
  }
}

export default BlogPage

// class BlogPage extends React.Component {
//   componentDidMount() {
//     this.props.fetchBlog(this.props.blogId)
    // let { dispatch } = this.props
    // fetchs the url blog id from the server
    // dispatch(fetchBlog(this.props.params.id))
  // }
  // render() {
  //   console.log(match.params.id)
    // const { blog } =
    // let { boundActionCreators } = bindActionCreators(fetchBlog(), this.props.dispatch)
    // pass in the blog fetched from the server into blog component
//     return (
//       <div>
//         <Layout />
//         {this.props.blogId}
//       </div>
//     )
//   }
// }

// function mapStateToProps(state, ownProps) {
//   return {
//     blogs: state.blogs,
//     blogId: ownProps.id
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBlog: (id) => {
//       dispatch(fetchBlog(id))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps
//   // state => ({ blogs: state.blogs })
// )(BlogPage)
