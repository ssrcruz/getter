import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBlogsIfNeeded } from '../actions/blogActions'

import BlogList from '../components/BlogList'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBlogsIfNeeded())
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props)
  // }
  handleChange() {
    this.dispatch(fetchBlogsIfNeeded())
  }

  render() {
    const { blogs, isFetching } = this.props
    return (
      <div>
        {blogs.length > 0 &&
        <div style={{ opacity: isFetching}}>
          <BlogList blogs={blogs} />
        </div>
        }
      </div>
    )
  }
}


App.propTypes = {
  blogs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  // const {
  //   isFetching,
  //   blogs
  // } = blogs || {
  //   isFetching: true,
  //   blogs: []
  // }
  return {
    blogs: state.blogs,
    isFetching: true
  }
}

export default connect(mapStateToProps)(App)
