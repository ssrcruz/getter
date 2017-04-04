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

  // will pass handleDelete() from the body
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  // To render the data
  render() {
    // send variables dowm the hierarchy with props
    // props immutable to reach them user this.props
    var categories = this.props.categories.map((category) => {
      return (
            <tr key={category.id}>
              <th scope="row">{category.id}</th>
              <td>{category.title}</td>
              <td>{category.description}</td>
              <td><button className='btn btn-primary' onClick={this.handleDelete.bind(this, category.id)}>Delete</button></td>
            </tr>
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
