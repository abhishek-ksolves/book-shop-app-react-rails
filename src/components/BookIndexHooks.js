import React, {useEffect, useState} from 'react'
import { withRouter } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import BookListHooks from './BookListHooks'

function BookIndexHooks(props) {

  const [books, setBooks] = useState([])

  useEffect(() => {
    (async function getBooksList() {
      const data = await fetch(`http://localhost:3000/books`)      
      const list = await data.json()
      setBooks(list)
      })()
  },[])
  // .then(res => setBooks(res))

  // useEffect((prevBooks) => {
  //   (async function getBooksList() {
  //     const data = await fetch(`http://localhost:3000/books`)      
  //     const list = await data.json()
  //     // setBooks(list)
  //     })()
  // },[books])

  const onShowHandler = bookID => {
    props.history.push({
      pathname: "/show",
      state: {bookID: bookID, prevPath: props.location.pathname}
      })
    // debugger 
    // console.log(this.props.data) 
    // console.log(this.props.location.pathname)
  }
  
  const onEditHandler = bookID => {
    // console.log(bookID)
    props.history.push({
      pathname: "/edit",
      state: {bookID: bookID}
      })
  }
  
  const onDeleteHandler = bookID => {
    if(window.confirm("Are you sure?")) {
      fetch("http://localhost:3000/books/"+bookID, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }})
      const currentBooks = books
      // debugger
      setBooks(
        currentBooks.filter(currentBook => currentBook.id !== bookID)
      )
    }
    // debugger
    // return books
  }
  // debugger
  const booksList = books.map(book => {
    return (
    //  <Lazyload>
        <BookListHooks key = {book.id} book={book} onDelete={onDeleteHandler} onShow={onShowHandler} editHandler={onEditHandler} />
    //  </Lazyload>
  )})

  return ( 
    <div>
      {/* <h5>{JSON.stringify(books)}</h5> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Author</th>            
          </tr>
        </thead>
        {booksList}
      </Table>
    </div>
  )
}

export default withRouter(BookIndexHooks)
// onDelete={this.onDeleteHandler} onShow={this.onShowHandler} editHandler={this.onEditHandler}