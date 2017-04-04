import React from 'react'
import { AllCategories } from './all_categories'
import { NewCategory } from './new_category'

export var Body = React.createClass({
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

  render() {
    return (
      <div>
        <NewCategory handleSubmit={this.handleSubmit} />
        <AllCategories categories={this.state.categories} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </div>
    )
  }
});
