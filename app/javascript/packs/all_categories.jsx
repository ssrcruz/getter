import React from 'react'
import { Category } from './category'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export var AllCategories = React.createClass({
  // How data is stored, the data must be initialized
  getInitialState() {
    return { categories: [] }
  },

  // How to get the data from the server
  componentDidMount() {
    $.getJSON('/api/v1/categories.json', (response) => { this.setState({ categories: response }) });
  },

  // will pass handleDelete() from the body
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(category) {
    this.props.handleUpdate(category);
  },

  // To render the data
  render() {
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    var categories = this.props.categories.map((category) => {
      return (
        <Category key={category.id}
                  category={category}
                  handleDelete={this.handleDelete.bind(this, category.id)}
                  handleUpdate={this.onUpdate} />

      )
    });
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories}
          </tbody>
        </table>
      </div>
    )
  }
});
