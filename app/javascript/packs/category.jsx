import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export var Category = React.createClass({

  getInitialState() {
    return {editable: false}
  },

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.category.id;
      var title = this.refs.title.value;
      var description = this.refs.description.value;
      var category = { id: id, title: title, description: description }
      this.props.handleUpdate(category);
    }
    this.setState({ editable: !this.state.editable })
  },

  render() {
    var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.category.title} /> : <div>{this.props.category.title}</div>
    var description = this.state.editable ? <td><input type='text' ref='description' defaultValue={this.props.category.description} /></td> : <td>{this.props.category.description}</td>

    return (
      <Router>
        <tr>
          <th scope="row">{this.props.category.id}</th>
          <td>
            <Link to={`/categories/${this.props.category.id}`}>
              {title}
              <Route path={`/categories/${this.props.category.id}`} />
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
});
