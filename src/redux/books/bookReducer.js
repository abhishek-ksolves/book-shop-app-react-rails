import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS} from './bookTypes'
import {BOOK_ADD_REQUEST, BOOK_ADD_FAILURE, BOOK_ADD_SUCCESS} from './bookAddType'

const initialState = {
  loading: false,
  books: [],
  error: ''
}

const bookReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: ''
      }
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload
      }
      case BOOK_ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error:''
      }

      case BOOK_ADD_SUCCESS:

        const newVal = [...state.books,action.payload]
        return {
          books: newVal,
          loading: false,
          error: ''
        }
      case BOOK_ADD_FAILURE:
        return {
            ...state,
          loading: false,
          error: action.payload
        }
    default: return state
  }
}

export default bookReducer