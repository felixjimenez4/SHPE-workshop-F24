import { useState } from 'react';
import './App.css';
import List from './List';


function App() {
    
    const [item, setListName] = useState('');

    const [toDoList, setToDoList] = useState([]);

    const table = ["Apple","Button","Jeans"];
    
    const handleChange = (e) => {
        setListName(e.target.value)
    }

    const handlSubmit = (e) => {
        if(item.trim().length !== 0) {
            setToDoList([...toDoList,{task: item.trim(), completed: false}]);
            setListName("");
        } 
    }
  return (
    <div className="App">
        <h1>TO DO list</h1>
        <input type='text' id='todoName' placeholder='Feed the Dog' value = {item} onChange={handleChange}></input>
        <button type="button" onClick={handlSubmit}>Enter</button>
        <List todo={toDoList} setToDoList={setToDoList} />
        <List todo={table}  />
    </div>
  );
}

export default App;
