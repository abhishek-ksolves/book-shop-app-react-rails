import React, { Component } from 'react'
import BookList from './BookList'
import { withRouter } from "react-router-dom"
import Lazyload from 'react-lazyload'
import Table from 'react-bootstrap/Table'

class BookIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       books: []
    }
  }

  onShowHandler = bookID => {
    this.props.history.push({
      pathname: "/show",
      state: {bookID: bookID, prevPath: this.props.location.pathname}
      })
    // debugger 
    // console.log(this.props.data) 
    // console.log(this.props.location.pathname)
  }
  
  onEditHandler = bookID => {
    // console.log(bookID)
    this.props.history.push({
      pathname: "/edit",
      state: {bookID: bookID}
      })
  }

  componentDidMount = async () => {
    const data = await fetch(`http://localhost:3000/books`)
    const list = await data.json()
    console.log(list)
    this.setState({books: list}) 
  }

  onDeleteHandler = bookID => {
    if(window.confirm("Are you sure?")) {
      fetch("http://localhost:3000/books/"+bookID, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }})
      const currentBooks = this.state.books
      this.setState({
        books: currentBooks.filter(currentBook => currentBook.id !== bookID)
      })
    }
  }
  
  render() {
    const booksList = this.state.books.map(book => {
      return (
      //  <Lazyload>
          <BookList key = {book.id} book={book} onDelete={this.onDeleteHandler} onShow={this.onShowHandler} editHandler={this.onEditHandler}/>
      //  </Lazyload>
    )})
    return (
      <div className = "container">
        {/* <table className="table"> */}
        <Table striped bordered hover>
          <thead>
              <tr>  
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Author</th>
              </tr>
          </thead>  
          {booksList}
        </Table>
        {/* </table> */}
      </div>
    )
  }
}

export default withRouter(BookIndex)
