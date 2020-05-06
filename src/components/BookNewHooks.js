import React, {useState} from 'react'
import { withRouter } from "react-router-dom"
import {Toast} from 'react-bootstrap'
// import { useToasts } from 'react-toast-notifications'

function BookNewHooks(props) {

  
    // const { addToast } = useToasts()
  
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

  // changeHandler = e => {
  //   setBook({[e.target.name]: e.target.value})
  // }

  // fileSelectedHandler = e => {
  //   console.log(e.target.files[0])
  //   setBook({
  //     selectedImage: e.target.files[0]
  //   })
  // }

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
    event.preventDefault()
    const err = validateFormEntries()
    if (book.selectedImage === null) {
      setBook({...book, 
        errorEncountered: true
      })
    } 
    if(!err) {    
      // submit form to the server
      console.log(book)
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
      // .then(response => console.log(response))
      .then(responseData => {
        if (responseData.code === 400){
          alert(responseData.message)
        }
        else {
          // addToast({
          //   appearance: 'success',
          //   autoDismiss: true,
          // })
          alert("added new book to the store")
          props.history.push({
            pathname: "/books_hooks"
            })
          console.log(this.props)
        }
        })
      .catch(err => {
        console.log("Error in creating new book data", err);});
    }
  }

  // return {
    // if (this.state.errorEncountered === true) {
    //   throw new Error('image not selected or is null')
    // }
    
      return (
        <div>
            {/* <Toast> */}
              {/* <Toast.Header> */}
                {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                {/* <strong className="mr-auto">New Book</strong> */}
                {/* <small>11 mins ago</small> */}
              {/* </Toast.Header> */}
              {/* <Toast.Body>Hi, You have successfully added a new book to the store.</Toast.Body> */}
            {/* </Toast> */}
          <br/>
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
  // }
}

export default withRouter(BookNewHooks)

