import { FormEvent, useRef, useState } from "react"
import { useTodos } from "../Store/TodoContext";

const AddTodo = () => {
    const [todo,setTodo]=useState('');
    const {handleAddTodo}=useTodos();
    const inputRef=useRef<HTMLInputElement | null>(null);
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!todo){
          return null
        }
        handleAddTodo(todo);
        setTodo('');
        inputRef.current?.focus();
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={todo} 
          onChange={(e)=>setTodo(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
