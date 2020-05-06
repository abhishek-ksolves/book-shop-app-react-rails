import React, {useState} from 'react'
import { withRouter } from "react-router-dom"

function ToDoList() {
  const [items, setItems] = useState([])
  const [temp, setTemp] = useState({
    value:''
  })

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: temp.value
    }])
    setTemp({
      value: ''
    })
    console.log(items)
    console.log(temp)
  }
  return (
    <div>
      <input type="text"
        placeholder="To Do List Item"
        name="listItem"
        value={temp.value} 
        onChange={e => setTemp({value: e.target.value})}/>
      <button onClick={addItem}>Add Item to List</button><br/>
      {items.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  )
}

export default ToDoList
// export default withRouter(ToDoList)
