import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import UpdatedComponent from './withBook'

export class BookShow extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // book: [],
      // url: ""
    }
    // console.log(this.props.bookID)
  }
  
  componentDidMount = () => {
    const {getBookData} = this.props
    getBookData()
    console.log('ab', this.props.location.state.bookID)
    // console.log(this.props)
    // this.setState({book: getBook})
    // // debugger
    // // console.log(this.props.location.state.bookid)
    // const data = await fetch(`http://localhost:3000/books/${this.props.location.state.bookid}`)
    // const showBook = await data.json()
    // // console.log(showBook)
    // this.setState({book: showBook, url: showBook.image.url}) 
    // // console.log(this.book)
  }
  
  goBackHandler = () => {
    this.props.history.push({
      pathname: this.props.location.state.prevPath
      })
  }

  onEditHandler = () => {
    console.log(this.state)
    this.props.history.push({
      pathname: "/edit",
      state: {bookid: this.props.getBook.id}
      })
  }

  render() {
    return (
      <div><p>{this.props.name}</p>
        <p>Name: {this.props.getBook.name}</p><br/>
        <p>Description: {this.props.getBook.description}</p><br/>
        <p>Author: {this.props.getBook.author}</p><br/>
        {/* <p>Book Profile:<img src={this.state.url}/></p><br/> */}
        <p>Book Profile:<img src={this.props.url} style={{width: '100px', height: '100px'}}/></p><br/>
        <button type="button" className="btn btn-primary" onClick={() => this.goBackHandler()}>Back</button><br/>
        <button type="button" className="btn btn-primary" onClick={() => this.onEditHandler()}>Edit</button>
      </div>
    )
  }
}

export default UpdatedComponent(withRouter(BookShow))
// export default UpdatedComponent(BookShow)


