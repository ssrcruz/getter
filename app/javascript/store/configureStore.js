// import { applyMiddleware, createStore } from "redux";
//
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
//
// import reducer from "./reducers";
//
// const middleware = applyMiddleware(promise(), thunk, createLogger());
//
// export default createStore(reducer, middleware);

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import reducer from '../reducers/blogsReducer'

const middleware = applyMiddleware(promise(), thunkMiddleware, createLogger())

export default createStore(reducer, middleware)
// const loggerMiddleware = createLogger()
//
// export default function configureStore(preloadedState) {
//   return createStore(
//     blogs,
//     preloadedState,
//     applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware
//     )
//   )
// }
