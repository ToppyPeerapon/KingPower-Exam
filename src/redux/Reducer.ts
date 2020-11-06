import { combineReducers } from 'redux'
import { informationReducer } from './information/Reducer'

export const rootReducer = combineReducers({
  information: informationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
