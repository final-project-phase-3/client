import { createStore } from 'redux'
import ingredientsReducers from './reducers/ingredientsReducers'

const store = createStore(ingredientsReducers)

export default store
