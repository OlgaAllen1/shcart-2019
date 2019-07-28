import {createStore, compose, applyMiddleware, combineReducers } from 'redux'
import routerItems from '../router'

export default createStore(
  combineReducers({
    router: routerItems.reducer
    }),

   compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      routerItems.enhancer,
      applyMiddleware(routerItems.middleware)
))
