import React from 'react'
import { Editor,
         EditorState,
         RichUtils,
         convertToRaw,
         convertFromRaw,
         ContentState } from 'draft-js'
import { BrowserRouter as Router,
         Route,
         Link,
         browserHistory
       } from 'react-router-dom'
import { deleteBlog } from '../actions/blogActions'
import { connect } from 'react-redux'
import BlogPage from './BlogPage'

class Blog extends React.Component {
  handleClick(e) {
    e.preventDefault()
    let { dispatch } = this.props
    dispatch(deleteBlog(this.props.id))
  }

  render() {
    const activeClass = (path) => (location.pathname === path ? 'active' : '')
    return (
      <Router history={browserHistory}>
        <div>
          <h1>
            <a className={activeClass("/blogs/:id")}
               href={`/blogs/${this.props.id}`}
            >
              {this.props.title}
            </a>
          </h1>
          <Editor
            readOnly={true}
            editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.description)))}
          />
          <button onClick={this.handleClick.bind(this)}>Delete</button>
          <Route path="/blogs/:id"></Route>
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({ blogs: state.blogs })
)(Blog)
