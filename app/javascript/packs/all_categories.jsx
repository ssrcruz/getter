import React from 'react'
import { Category } from './category'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NewCategory } from './new_category'

export var Blogs = React.createClass({
  // How data is stored, the data must be initialized
  getInitialState() {
    return { categories: [] }
  },

  // How to get the data from the server
  componentDidMount() {
    $.getJSON('/api/v1/categories.json', (response) => { this.setState({ categories: response }) });
  },

  // pass a function as a property down the hierarchy
  handleSubmit(category) {
    // add new category to the category array
    var newState = this.state.categories.concat(category);
    this.setState({ categories: newState })
  },

  // Delete data from the server
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/categories/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeCategoryClient(id);
      }
    });
  },
  // handles the update to the server
  handleUpdate(category) {
    $.ajax({
      url: `/api/v1/categories/${category.id}`,
      type: 'PUT',
      data: { category: category },
      success: (category) => {
        this.updateCategories(category);
      }
    })
  },

  // replace new update with the old one
  updateCategories(category) {
    var categories = this.state.categories.filter((i) => { return i.id != category.id });
    categories.push(category);

    this.setState({categories: categories});
  },

  // removes data from virtual memory
  removeCategoryClient(id) {
    var newCategories = this.state.categories.filter((category) => {
      return category.id != id;
    });

    this.setState({ categories: newCategories });
  },

  onUpdate(category) {
    this.handleUpdate(category);
  },

  render() {
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    var categories = this.state.categories.map((category) => {
      return (
        <Category key={category.id}
                  category={category}
                  handleDelete={this.handleDelete.bind(this, category.id)}
                  handleUpdate={this.onUpdate} />
      )
    });

    return (
      <div className="container">
        <NewCategory handleSubmit={this.handleSubmit} />
        <h2>Blogs</h2>
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
