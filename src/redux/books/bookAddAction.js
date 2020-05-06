import {BOOK_ADD_REQUEST, BOOK_ADD_FAILURE, BOOK_ADD_SUCCESS} from './bookAddType'

export const bookAddRequest = book => {
    return {
        type: BOOK_ADD_REQUEST,
        payload: book
    }
}

export const bookAddSuccess = book => {
    return {
        type: BOOK_ADD_SUCCESS,
        payload: book
    }
}

export const bookAddFailure = error => {
    return {
      type: BOOK_ADD_FAILURE,
      payload: error
    }
  }
  
export const addBook = book => {   
    return function (dispatch) {
        dispatch(bookAddRequest())
        // console.log(book)
        const fd = new FormData()
        fd.set('book[name]', book.name)
        fd.set('book[description]', book.description)
        fd.set('book[author]', book.author)
        fd.append('book[image]', book.selectedImage, book.selectedImage.name)
        const url = 'http://localhost:3000/books'
        fetch(url, {
            method: "POST",
            body: fd
        })
        .then(response => {
            if (response.code === 400){
                alert(response.message)
                dispatch(bookAddFailure(response.message))
            }
            else {
                alert("added new book to the store")
                dispatch(bookAddSuccess(book))
                }
            })
            .catch(error => {
                // error.message is the error message
                dispatch(bookAddFailure(error.message))
            })
            // .catch(err => 
            // console.log("Error in creating new book data", err);});
    }
}
    
//   export const addBook = book => {
//     return function (dispatch) {
//       dispatch(bookAddRequest())
//       axios.get('http://localhost:3000/books')
//       .then(response => {
//         //  is the users response.data.map(book => book.id)
//         const books = response.data
//         console.log(books)
//         dispatch(bookAddSuccess())
//        })
//        .catch(error => {
//          // error.message is the error message
//          dispatch(fetchBooksFailure(error.message))
//        })
//    }
//  }