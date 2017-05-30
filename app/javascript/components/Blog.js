import React from 'react'
import { Editor,
         EditorState,
         RichUtils,
         convertToRaw,
         convertFromRaw,
         ContentState } from 'draft-js'
import { deleteBlog } from '../actions/blogActions'
import { connect } from 'react-redux'

class Blog extends React.Component {
  handleClick(e) {
    e.preventDefault()
    let { dispatch } = this.props
    dispatch(deleteBlog(this.props.id))
  }

  render() {
    return (
      <div>
        {this.props.title}
        <Editor
          readOnly={true}
          editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.description)))}
        />
      <button onClick={this.handleClick.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default connect(
  state => ({ blogs: state.blogs })
)(Blog)
