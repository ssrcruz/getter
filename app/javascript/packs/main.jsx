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