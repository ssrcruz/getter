import React from 'react'
import ReactDOM from 'react-dom'

export var AllCategories = React.createClass({
  // How data is stored, the data must be initialized
  getInitialState() {
    return { categories: [] }
  },

  // How to get the data from the server
  componentDidMount() {
    $.getJSON('/api/v1/categories.json', (response) => { this.setState({ categories: response }) });
  },

  // To render the data
  render() {
    var categories = this.state.categories.map((category) => {
      return (
        <div key={category.id}>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      )
    });
    return (
      <div>
        {categories}
      </div>
    )
  }
});
