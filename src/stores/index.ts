import { combineReducers } from 'redux'
import clicks from './clicks'
import next from './next'

const allReducer = combineReducers({
  clicks,
  next
})

export default allReducer