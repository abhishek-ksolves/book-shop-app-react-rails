import {FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS} from './bookTypes'
import axios from 'axios'

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  }
}

export const fetchBooksSuccess = users => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: users
  }
}

export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
}

 export const fetchBooks = () => {
   return function (dispatch) {
     dispatch(fetchBooksRequest())
     axios.get('http://localhost:3000/books')
     .then(response => {
       const books = response.data
       console.log(books)
       dispatch(fetchBooksSuccess(books))
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error.message))
      })
  }
}
