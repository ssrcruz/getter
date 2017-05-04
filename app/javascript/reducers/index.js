import { combineReducers } from "redux"
import blogs from "./blogsReducer"
// import visibilityFilter from './visibilityFilter'
//
// const blogApp = combineReducers({
//   blogs,
//   visibilityFilter
// })
//
// export default blogApp
export default combineReducers({
  blogs
})
