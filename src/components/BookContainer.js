import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux'
import ReduxListBook from './ReduxListBook'
import Table from 'react-bootstrap/Table'

function BookContainer({booksData, fetchBooks}) {

  // useEffect(() => {
  //     fetchBooks()
  // },[])

  const booksList = booksData.map(book => {
    return (
        <ReduxListBook key = {book.id} book={book} />
  )})
  return (
    
    // <div><button onClick={()=>fetchBooks()}>Click</button> {JSON.stringify(booksData)}</div>
    <div className = "container">
    <button onClick={()=>fetchBooks()}>Click</button> 
        {/* <table className="table"> */}
        <Table striped bordered hover>
          <thead>
              <tr>  
                  {/* <th scope="col"></th> */}
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

const mapStateToProps = state => {
  // debugger
  return {
    // booksData: state.showBooks.books
    booksData: state.books
  }
}

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer)
