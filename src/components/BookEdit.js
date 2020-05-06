import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import UpdatedComponent from './withBook'

export class BookEdit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: '',
      name: '',
      description: '',
      author: '',
      image:''
    }
    console.log('shal1',this.props.getBook)
  }
  
  componentDidMount = () => {
    const {getBookData} = this.props
    getBookData()
    
    // this.setState({
    //   id: this.props.getBook.id,
    //   name: this.props.getBook.name,
    //   description: this.props.getBook.description,
    //   author: this.props.getBook.author,
    //   image: ''
    // }) 
    // console.log(this.props.location.state.bookid)
    // console.log(this.props)
    // const data = await fetch(`http://localhost:3000/books/${this.props.location.state.bookid}`)
    // const showBook = await data.json()
    // console.log(showBook)
    // this.setState({
    //   id: showBook.id,
    //   name: showBook.name,
    //   description: showBook.description,
    //   author: showBook.author,
    //   image: ""
    // })   
  }

  componentWillReceiveProps = (nextProps) => {
    // debugger
    if (this.props != nextProps) {
      this.setState({name: nextProps.getBook.name})
    }
  }

  // componentWillReceiveProps

  change = () => {
    this.setState({id: this.props.getBook.id})
  }
  
  componentDidUpdate = () => {
    // debugger
  }

  static getDerivedStateFromError(error) {
    
  }

  saveEditBook = (data, event) => {
    event.preventDefault()
    const url = `http://localhost:3000/books/${data.id}`
    fetch(url, {
    method: "PUT",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.code === 400){
        alert(responseData.message)
      }
      else {
        alert("book record updated successfully")
        this.props.history.push({
          pathname: "/books"
          })
        console.log(this.props)
        // debugger
      }
      })
    .catch(err => {
      console.log("Error in updating book details", err);});
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {name, description, author, image} = this.state
      return (
        <div>
          <p>{this.props.name}</p>
          <br/>
          <form>
              <h3>Update book details:</h3>
                <div>
                  <label>Title</label>
                  <input type="text" 
                    placeholder="Add Book Title"
                    name="name" 
                    value={name} 
                    onChange={this.changeHandler}/>
                </div>
                <div>
                  <label>About Book</label>
                  <input type="text" 
                    placeholder="Description"
                    name="description"
                    value={description} 
                    onChange={this.changeHandler}/>
                </div>
                <div>
                  <label>Author</label>
                  <input type="text"
                    placeholder="Author"
                    name="author"
                    value={author} 
                    onChange={this.changeHandler} />
                </div>
                <div>
                  <label>Add Book's Cover:</label>
                  <input type="file"
                  name="image"
                  value={image} 
                  onChange={this.changeHandler} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {this.saveEditBook(this.state, e)}}>Update</button>
          </form>
        </div>


      )
    }
}


export default UpdatedComponent(withRouter(BookEdit))
