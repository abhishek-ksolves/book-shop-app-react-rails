import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         getBook: [], 
         url: ''
      }
    }
    
    
    getBookData = async () => {
      // debugger
      // console.log(this.props.location.state.bookid)
      const data = await fetch(`http://localhost:3000/books/${this.props.location.state.bookID}`)
      const showBook = await data.json()
      // debugger
      this.setState({getBook: showBook, url: showBook.image.url})
      console.log(showBook)
      // this.setState({book: showBook, url: showBook.image.url}) 
      // console.log(this.book)
    }

    render() {
      console.log(this.props)
      return <OriginalComponent url={this.state.url} getBook={this.state.getBook} getBookData={this.getBookData} name='Shalabh'/>
    }
  }
  return NewComponent
}

export default UpdatedComponent