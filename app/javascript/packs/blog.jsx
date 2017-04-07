import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Blog extends React.Component {
  constructor() {
    super();
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
    var description = this.state.editable ? <td><input type='text' ref='description' defaultValue={this.props.blog.description} /></td> : <td>{this.props.blog.description}</td>

    return (
      <Router>
        <tr>
          <th scope="row">{this.props.blog.id}</th>
          <td>
            <Link to={`/blogs/${this.props.blog.id}`}>
              {title}
              <Route path={`/blogs/${this.props.blog.id}`} />
            </Link>
          </td>
            {description}
          <td>
            <button className='btn btn-primary' onClick={this.props.handleDelete}>Delete</button>
          </td>
          <td>
            <button className='btn btn-primary' onClick={this.handleEdit}>{ this.state.editable ? 'Submit' : 'Edit' }</button>
          </td>
        </tr>
      </Router>
    )
  }
}
