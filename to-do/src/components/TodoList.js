import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState ([]);
//below todo is - If someone will not type any letter the task will not apear on the list
    const addTodo = todo => {
        if (todo.text ===""){
            return
        }

    const updateTodo = (todoId, newValue) =>{
        if (newValue.text ===""){
            return;
        }

        setTodos(prev => prev.map(item => (item.id ===todoId ? newValue : item)))

    } 


    const newTodos = [todo, ...todos];
        setTodos(newTodos);
            //console.log(todo, ...todos);
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }


    

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

return (
    <div>
        <h1> What should I do today?</h1>
        <TodoForm onSubmit = {addTodo}/>
        <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        updateTodo ={updateTodo}
        />    
    </div>
  )
}

export default TodoList