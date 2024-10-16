import React from 'react'

function List({todo}) {
    const handleCheck = (index) => {
        let temp = todo.filter((t,i) => (i !== index))
    }
  return (
    <div>
        {todo.map((item,index) => (
            <li key={Math.floor(Math.random()) * 1000}>
                <input type='checkbox' onClick={handleCheck(index)}></input>
                {item}
            </li>
        ))}
    </div>
  )
}

export default List