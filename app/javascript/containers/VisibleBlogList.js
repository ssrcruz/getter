import { connect } from 'react-redux'
import { toggleBlog } from '../actions/blogActions'
import BlogList from '../components/BlogList'

const getVisibleBlogs = (blogs, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return blogs
    case 'SHOW_COMPLETED':
      return blogs.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return blogs.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: getVisibleBlogs(state.blogs, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlogClick: (id) => {
      dispatch(toggleBlog(id))
    }
  }
}

const VisibleBlogList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default VisibleBlogList
