import React, { Component } from 'react'

export class ErrorBoundaryDemo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
    console.log(props)
  }
  
  static getDerivedStateFromError(error) {
    // debugger
    return ( {  
        hasError: true
    })
  }

  componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

  render() {
    // debugger
    if(this.state.hasError) {
      return (
        <h3>Something went wrong</h3>
      )
    }
    console.log(this.state.hasError)
    return this.props.children
  }
}

export default ErrorBoundaryDemo
