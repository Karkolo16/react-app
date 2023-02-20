import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState ([]);
//below todo is - If someone will not type any letter the task will not apear on the list
    const addTodo = todo => {
        if (todo.text ===""){
            return
        }


        const newTodos = [todo, ...todos];
            setTodos(newTodos);
            //console.log(todo, ...todos);
    
        }

return (
    <div>
        <h1> What should I do today?</h1>
        <TodoForm onSubmit = {addTodo}/>
    </div>
  )
}

export default TodoList