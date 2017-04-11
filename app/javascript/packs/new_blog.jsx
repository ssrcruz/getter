import React from 'react'
import { RichTextEditor } from './text_editor'

export class NewBlog extends React.Component {
  handleClick() {
    // how to get the value of the input fields
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    // send values into the server
    $.ajax({
      url: '/api/v1/blogs',
      type: 'POST',
      data: { blog: { title: title, description: description } },
      success: (blog) => {
        // calls handleSubmit on success
        this.props.handleSubmit(blog);
      }
    });
  }

  render() {
    return (
      // on submit call handleClick
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Title:</label>
            <input ref='title' type='text' className='form-control' placeholder='Enter Title' />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description:</label>
            <RichTextEditor ref='description' type='text' className='form-control' placeholder='Enter Description' />
          </div>
          <button onClick={this.handleClick} type='button' className='btn btn-primary'>Publish Article</button>
        </form>
      </div>
    )
  }
}
