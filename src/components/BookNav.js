import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function BookNav() {

  const [key, setKey] = useState({value: 1}) 
  const [apple, setApple] = useState({value: ''})
  const handleSelect = (eventKey) => {
    setKey({...key, value: eventKey})};
  
  return ( 
    <div>
      <Nav variant="pills" activeKey={key.value} onSelect={handleSelect}>      
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" as={Link} to="/books">Books</Nav.Link>       
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" as={Link} to="/add_new_book">Add New Book</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Hooks" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" as={Link} to="/books_hooks">Books List (Hooks)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" as={Link} to="/add_new_book_hooks">Add New Book (Hooks)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" as={Link} to="/to_do_list">To Do List (Hooks)</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Redux" id="nav-dropdown">
          <NavDropdown.Item eventKey="5.1" as={Link} to="/books_redux">Books List (Redux)</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.2" as={Link} to="/book_new_redux">Add New Book (Redux)</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.3" as={Link} to="/to_do_list">To Do List (Redux)</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="5.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="7" as={Link} to="/contact_us">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
   
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books List</Link></li>
        <li><Link to="/books_hooks">Books List (implementation using hooks)</Link></li>
        <li><Link to="/add_new_book">Add New Book</Link></li>
        <li><Link to="/add_new_book_hooks">Add New Book (implementation using hooks)</Link></li>
        <li><Link to="/to_do_list">To Do List (implementation using hooks)</Link></li>
        <li><Link to="/contact_us">Contact Us</Link></li>
      </ul> */}
    </div>
  )
}
