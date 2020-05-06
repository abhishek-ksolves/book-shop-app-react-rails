import React from 'react'

function BookListHooks(props) {
  return (
    <tbody>
      <tr>
        <td><img src={props.book.image.url} style={{width: '100px', height: '100px'}}/></td>
        <td>{props.book.name}</td>
        <td>{props.book.description}</td>
        <td>{props.book.author}</td>
        <td><button type="button" className="btn btn-info" onClick={() => props.onShow(props.book.id)}>Show-H</button></td>
        <td><button type="button" className="btn btn-primary" onClick={() => props.editHandler(props.book.id)}>Edit-H</button></td>
        <td><button type="button" className="btn btn-danger" onClick={() => props.onDelete(props.book.id)}>Delete-H</button></td>
      </tr>        
    </tbody>
  )
}

export default BookListHooks
