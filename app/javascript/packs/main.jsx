import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header'
import { Body } from './body'

var Main = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )
//
// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: React.PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
