import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState ([])

  
return (
    <div>
        <h1> What should I do today?</h1>
        <TodoForm/>
    </div>
  )
}

export default TodoList