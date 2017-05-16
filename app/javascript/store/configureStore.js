import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import reducer from '../reducers/blogsReducer'

const middleware = applyMiddleware(promise(), thunkMiddleware, createLogger())

export default createStore(reducer, middleware)
