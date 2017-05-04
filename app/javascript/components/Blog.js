import React from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState} from 'draft-js'

const Blog = ({title, description}) => (
  <div>
    {title}
    <Editor
      editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(description)))}
    />
  </div>
)

export default Blog
// export default class Blog extends React.Component {
//   render() {
//     return (

//     )
//   }
// }
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



// const Blog = ({ onClick, completed, title }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     {title}
//   </li>
// )
  // constructor(props) {
  //   super(props);
  //   this.state = {editable: false};
  //   this.handleEdit = this.handleEdit.bind(this);
  // }
  //
  // handleEdit() {
  //   if(this.state.editable) {
  //     var id = this.props.blog.id;
  //     var title = this.refs.title.value;
  //     var description = this.refs.description.value;
  //     var blog = { id: id, title: title, description: description }
  //     this.props.handleUpdate(blog);
  //   }
  //   this.setState({ editable: !this.state.editable })
  // }

  // render() {
    // var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.blog.title} /> : <div>{this.props.blog.title}</div>
    // var description = this.state.editable ? <td><input type='text' ref='description' defaultValue={this.props.blog.description} /></td> : <td></td>

//     return (
//       <Router>
//         <div>
//           {this.props.id}
//           <Link to={`/blogs/${this.props.id}`}>
//             {this.props.title}
//             <Route path={`/blogs/${this.props.id}`} />
//           </Link>
          // <Editor
          //   editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.description)))}
          // />
//           <button className='btn btn-primary'>Delete</button>
//           <button className='btn btn-primary'></button>
//         </div>
//       </Router>
//     )
//   }
// }
