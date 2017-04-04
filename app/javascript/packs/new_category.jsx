import React from 'react'
import ReactDOM from 'react-dom'
// import { Body } from './body'

export var NewCategory = React.createClass ({
  handleClick() {
    // how to get the value of the input fields
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    // send values into the server
    $.ajax({
      url: '/api/v1/categories',
      type: 'POST',
      data: { category: { title: title, description: description } },
      success: (category) => {
        // calls handleSubmit on success 
        this.props.handleSubmit(category);
      }
    });
  },
  render() {
    return (
      // on submit call handleClick
      <div>
        <input ref='title' placeholder='Enter Title' />
        <input ref='description' placeholder='Enter Description' />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
