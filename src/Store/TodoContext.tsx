import { ReactNode, createContext, useContext, useState } from "react";


export type TodosProviderProps={
    children:ReactNode;
}

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}


export type TodosContext={
    todos:Todo[];
    handleAddTodo:(task:string)=>void;
    toggleTodoCompleted:(id:string)=>void;
    handleDeleteTodo:(id:string)=>void;
}

export const todosContext  = createContext<TodosContext | null>(null);

export const TodosProvider=({children}:TodosProviderProps)=>{
    const [todos,setTodos]=useState<Todo[]>([])
    const handleAddTodo=(task:string)=>{
        setTodos((prev)=>{
            const newTodos:Todo[]=[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date(),
                },
                ...prev
            ]
            console.log(newTodos);
            
            return newTodos
        })
    }
    const toggleTodoCompleted=(id:string)=>{
        setTodos((prev)=>{
            let  newTodo = prev.map((todo)=>{
                if(todo.id===id){
                    return{...todo,completed:!todo.completed}
                }
                return todo;
            })
            return newTodo;
        })
    }
    const handleDeleteTodo=(id:string)=>{
        setTodos((prev)=>{
            let newTodo=prev.filter((filterTodo)=>filterTodo.id !== id)
            return newTodo;
        })
    }
    return(
        <todosContext.Provider value={{todos,handleAddTodo,toggleTodoCompleted,handleDeleteTodo}}>
            {children}
        </todosContext.Provider>
    )
}
export const useTodos=()=>{
    const todosConsumer=useContext(todosContext);
    if(!todosConsumer){
        throw new Error('useTodos used outside of provider');
    }
    return todosConsumer;
}