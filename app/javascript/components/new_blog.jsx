import React from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
// import Editor from 'draft-js-plugins-editor'
// import 'draft-js-side-toolbar-plugin/lib/plugin.css'
// import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin'
// import editorStyles from '../styles/editorStyles.css'
import Layout from '../layouts/application'
import { addBlog } from '../actions/blogActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { styleMap, BlockStyleControls, InlineStyleControls, getBlockStyle } from './RichEditor' 
import '../styles/editorStyles.css'

// const sideToolbarPlugin = createSideToolbarPlugin()
// const { SideToolbar } = sideToolbarPlugin
// const plugins = [sideToolbarPlugin]

// const text = "Tell your story"

class NewBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.focus = () => this.refs.description.focus()
    this.onChange = (editorState) => this.setState({editorState})

    this.handleKeyCommand = (command) => this._handleKeyCommand(command)
    this.toggleBlockType = (type) => this._toggleBlockType(type)
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style)
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    )
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }

  handleClick(e) {
    e.preventDefault()
    // how to get the value of the input fields
    var title = this.refs.title.value
    var description = this.refs.description.value
    let { dispatch } = this.props
    // grabs the current content state
    const contentState = this.state.editorState.getCurrentContent()
    // converts the content to raw json
    const rawDraftContentState = convertToRaw(contentState)
    // turn the raw json content state into a string to be stored in the database
    var data = { blog: { title: title, description: JSON.stringify(rawDraftContentState) } }
    dispatch(addBlog(data))
  }

  render() {
    const { editorState } = this.state
    let className = 'RichEditor-editor'
    var contentState = editorState.getCurrentContent()
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += 'RichEditor-hidePlaceholder'
      }
    }
    return (
      <div>
        <Layout />
          <div className="form-group">
            <input ref="title" type="text" placeholder="Title" />
          </div>
        <form className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              ref="description"
              spellCheck={true}
            />
          </div>
        </form>
        <button onClick={this.handleClick.bind(this)}>Submit Blog</button>
      </div>
    )
  }
}

export default connect(
  state => ({ blogs: state.blogs })
)(NewBlog)
