import React from 'react'
import ReactDOM from 'react-dom'
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

  render() {
    return (
      <div>
        <NewCategory handleSubmit={this.handleSubmit} />
        <AllCategories categories={this.state.categories} />
      </div>
    )
  }
});
