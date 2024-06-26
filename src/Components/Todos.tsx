import { useTodos } from "../Store/TodoContext";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const {todos,toggleTodoCompleted,handleDeleteTodo}=useTodos();
    const [searchParams]=useSearchParams();
    let todosData=searchParams.get('todos');
    console.log(todosData);
    
    let filterData=todos;
    if(todosData==='active'){
        filterData=filterData.filter((task)=>!task.completed)
    }
    if(todosData==='completed'){
        filterData=filterData.filter((task)=>!task.completed)
    }
  return (
    <ul>
        {
            filterData.map((todo)=>{
                return <li key={todo.id}>
                    <input 
                    type="checkbox" 
                    id={todo.id} 
                    checked={todo.completed}
                    onChange={()=>toggleTodoCompleted(todo.id)}
                    />
                    <label htmlFor={todo.id}>{todo.task}</label>
                    {
                        todo.completed && (
                            <button type="button"
                            onClick={()=>handleDeleteTodo(todo.id)}
                            >Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos
