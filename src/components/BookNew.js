import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BookNew extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()

    this.cbRef = null
    this.setCbRef = element => {
      this.cbRef = element
    }

    this.state = {
      name: '',
      nameError: '',
      description: '',
      descriptionError: '',
      author: '',
      aurhorError: '',
      selectedImage: null,
      errorEncountered: false
    }
  }
  componentDidMount(){
    this.inputRef.current.focus()

    // if (this.cbRef){
    //   this.cbRef.focus()
    // }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  fileSelectedHandler = e => {
    console.log(e.target.files[0])
    this.setState({
      selectedImage: e.target.files[0]
    })
    console.log(e.target.files[0].name)
  }

  validateFormEntries = () => {
    let isError = false
    const errors = {}
    if (this.state.name.length < 5) {
      isError = true
      errors.nameError = "Name should be atleast 5 characters long"
      } 
      else {
        this.setState({nameError: ''})
      }
      
      if (isError) {
        this.setState({
          ...this.state,
          ...errors
        })
      }
      console.log(isError)
      return isError
  }

  submitHandler = (book, event) => {
    event.preventDefault()
    const err = this.validateFormEntries()
    if (this.state.selectedImage == null) {
      this.setState({
        errorEncountered: true
      })
    } 
    if(!err) {    
      //submit form to the server
      const fd = new FormData()
      fd.set('book[name]', this.state.name)
      fd.set('book[description]', this.state.description)
      fd.set('book[author]', this.state.author)
      fd.append('book[image]', this.state.selectedImage, this.state.selectedImage.name)
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
          alert("added new book to the store")
          this.props.history.push({
            pathname: "/books"
            })
          console.log(this.props)
        }
        })
      .catch(err => {
        console.log("Error in creating new book data", err);});
    }
  }

  render() {
    if (this.state.errorEncountered === true) {
      throw new Error('image not selected or is null')
    }
    const {name, description, author} = this.state
      return (
        <div>
          <br/>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
                name="name"
                value={name} 
                ref = {this.inputRef}
                onChange={this.changeHandler}
                placeholder="Enter Book's Name" /><label style={{color: 'red'}}>{this.state.nameError}</label>
            </Form.Group>

            <Form.Group>
              <Form.Label>Short description</Form.Label>
              <Form.Control type="text"
                name="description"
                value={description}
                ref = {this.setCbRef}
                onChange={this.changeHandler}
                placeholder="In just one line tell me something about the book" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author's Name</Form.Label>
              <Form.Control type="text"
                name="author"
                value={author}
                onChange={this.changeHandler}
                placeholder="Tell me who wrote the book" />
            </Form.Group>

            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input isValid 
                onChange={this.fileSelectedHandler}/>
              <Form.File.Label data-browse="ADD">
                Select an image
              </Form.File.Label>
            </Form.File>
            <br/>
            <br/>
            <Button variant="primary" onClick={(e) => {this.submitHandler(this.state, e)}}>
              Submit
            </Button>
          </Form>
          {/* <form>
              <h3>Add new book to the store:</h3>
                <div>
                  <label>Title</label>
                  <input type="text" 
                    placeholder="Add Book Title"
                    name="name" 
                    value={name} 
                    onChange={this.changeHandler}/><label style={{color: 'red'}}>{this.state.nameError}</label>
                </div>
                <div>
                  <label>About Book</label>
                  <input type="text" 
                    placeholder="Description"
                    name="description"
                    value={description} 
                    onChange={this.changeHandler}/><label style={{color: 'red'}}>{this.state.descriptionError}</label>
                </div>
                <div>
                  <label>Author</label>
                  <input type="text"
                    placeholder="Author"
                    name="author"
                    value={author} 
                    onChange={this.changeHandler}/><label style={{color: 'red'}}>{this.state.aurhorError}</label>
                </div>
                <div>
                  <label>Add Book's Cover:</label>
                  <input type="file"
                  onChange={this.fileSelectedHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {this.submitHandler(this.state, e)}}>Create New</button>
          </form> */}
        </div>
      )
    }
}

export default withRouter(BookNew)
