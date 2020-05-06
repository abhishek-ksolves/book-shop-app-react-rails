import { combineReducers } from 'redux'
import { bookReducer, bookAddReducer } from './books/bookReducer'
// import bookAddReducer from './books/bookAddReducer'


const rootReducer = combineReducers({
    addBook: bookAddReducer,
    showBooks: bookReducer
})

export default rootReducer