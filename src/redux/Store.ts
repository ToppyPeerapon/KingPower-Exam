import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { informationReducer } from './information/Reducer'

const logger = createLogger({})

export const store = createStore(informationReducer, applyMiddleware(logger))
