import React, { useState } from 'react';


function TodoForm(props) {
    const[input, setInput] = useState('');

//this function make possibility to write text in input
    const handleChange = e  => {
        setInput(e.target.value)
    }
//
//this make the page not refresh when I click button

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
}

//

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
            <input  type="text"
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange}>
            </input>
        <button className="todo-button">Add activity</button>
    </form>
  )
}

export default TodoForm