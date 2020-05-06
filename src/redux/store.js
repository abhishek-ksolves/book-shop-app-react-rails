import {createStore, applyMiddleware} from 'redux'
import bookReducer from './books/bookReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(bookReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store


// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './rootReducer'

// const store = createStore(rootReducer, applyMiddleware(thunk))

// export default store