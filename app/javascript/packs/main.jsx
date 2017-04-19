import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from '../components/header'
import { Blogs } from '../components/all_blogs'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
