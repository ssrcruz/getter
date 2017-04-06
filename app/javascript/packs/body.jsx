import React from 'react'
import { AllCategories } from './all_categories'
import { NewCategory } from './new_category'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export var Body = React.createClass({
  // How data is stored, the data must be initialized
  getInitialState() {
    return { categories: [] }
  },

  // How to get the data from the server
  componentDidMount() {
    $.getJSON('/api/v1/categories.json', (response) => { this.setState({ categories: response }) });
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
