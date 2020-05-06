import React from 'react'

function ReduxListBook(props) {
    return (
        <tbody> 
        <tr>
            {/* <td><img src={props.book.image.url} style={{width: '100px', height: '100px'}}/></td> */}
            <td>{props.book.name}</td>
            <td>{props.book.description}</td>
            <td>{props.book.author}</td>
            {/* <td><img src={props.book.image.url}/></td> */}
            {/* <td><button type="button" className="btn btn-info" onClick={() => props.onShow(props.book.id)}>Show</button></td> */}
            {/* <td><button type="button" className="btn btn-primary" onClick={() => props.editHandler(props.book.id)}>Edit</button></td> */}
            {/* <td><button type="button" className="btn btn-danger" onClick={() => props.onDelete(props.book.id)}>Delete</button></td> */}
        </tr>
        </tbody>
    )
}

export default ReduxListBook
