import React from 'react'
import FilterLink from '../containers/FilterLink'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
// import { BlogList } from './BlogList'
// import { Contact } from './contact'
// import { NewBlog } from './new_blog'
// import { App } from './App'
const Header = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Header
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )
