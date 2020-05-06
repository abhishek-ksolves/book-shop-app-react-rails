import React, {useState} from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { addBook } from '../redux'

function BookNewRedux(props) {
  const [book, setBook] = useState({
    name: '',
    nameError: '',
    description: '',
    descriptionError: '',
    author: '',
    aurhorError: '',
    selectedImage: null,
    errorEncountered: false
  })


  const validateFormEntries = () => {
    let isError = false
    const errors = {}
    if (book.name.length < 5) {
      isError = true
      errors.nameError = "Name should be atleast 5 characters long"
      } 
      else {
        setBook({...book, nameError: ''})
      }
      
      if (isError) {
        setBook({
          ...book,
          ...errors
        })
      }
      console.log(isError)
      return isError
  }

const submitHandler = (book, event) => {
  props.addBook(book)
  event.preventDefault()
  // props.history.push({
  //   pathname: "/books_redux"
  // })
}

      return (
        <div>
          <form>
              <h3>Add new book to the store: "Implementing React Hooks"</h3>
                <div>
                  <label>Title</label>
                  <input type="text" 
                    placeholder="Add Book Title"
                    name="name" 
                    value={book.name} 
                    onChange={e => setBook({...book, name: e.target.value})}/><label style={{color: 'red'}}>{book.nameError}</label>
                </div>
                <div>
                  <label>About Book</label>
                  <input type="text" 
                    placeholder="Description"
                    name="description"
                    value={book.description} 
                    onChange={e => setBook({...book, description: e.target.value })}/><label style={{color: 'red'}}>{book.descriptionError}</label>
                </div>
                <div>
                  <label>Author</label>
                  <input type="text"
                    placeholder="Author"
                    name="author"
                    value={book.author} 
                    onChange={e => setBook({...book, author: e.target.value})}/><label style={{color: 'red'}}>{book.aurhorError}</label>
                </div>
                <div>
                  <label>Add Book's Cover:</label>
                  <input type="file"
                  onChange={e => setBook({...book, selectedImage: e.target.files[0]})}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {submitHandler(book, e)}}>Create New</button>
          </form>
        </div>
      )
}



const mapStateToProps = state => {
  return {
    data: state.addBook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch(addBook(book))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookNewRedux)
