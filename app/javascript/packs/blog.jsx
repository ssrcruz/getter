import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState} from 'draft-js'
import { MainBlog } from './main_blog'


export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editable: false};
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.blog.id;
      var title = this.refs.title.value;
      var description = this.refs.description.value;
      var blog = { id: id, title: title, description: description }
      this.props.handleUpdate(blog);
    }
    this.setState({ editable: !this.state.editable })
  }

  render() {
    var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.blog.title} /> : <div>{this.props.blog.title}</div>
    var description = this.state.editable ? <td><input type='text' ref='description' defaultValue={this.props.blog.description} /></td> : <td></td>

    return (
      <Router>
        <div>
          {this.props.blog.id}
          <Link to={`/blogs/${this.props.blog.id}`}>
            {title}
            <Route path={`/blogs/${this.props.blog.id}`} />
          </Link>
          <Editor
            editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.blog.description)))}
          />
          <button className='btn btn-primary' onClick={this.props.handleDelete}>Delete</button>
          <button className='btn btn-primary' onClick={this.handleEdit}>{ this.state.editable ? 'Submit' : 'Edit' }</button>
        </div>
      </Router>
    )
  }
}
