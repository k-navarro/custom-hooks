import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { useEffect } from "react"

const init = ()=>{
  return JSON.parse(localStorage.getItem('todos')||[])
}

export const useTodo = () => {
 
  
    const [todos, dispatch] = useReducer (todoReducer,[], init)
    
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos) );
    },[todos])
  
    const HandleNewTodo = (todo) =>{
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatch(action)
    }
    const handleDeleteTodo = (id) =>{
      console.log({id})
      dispatch({
        type: '[TODO] Remove Todo',
        payload: id
      })
    }
    const handleToggloTodo = (id) =>{
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
      })
    }

   
      
      
    

    return{
      todos,
      handleDeleteTodo,
      HandleNewTodo,
      handleToggloTodo,
      todosCount: todos.length,
      pendingTodosCount:todos.filter(todo=> !todo.done).length
    }
}

