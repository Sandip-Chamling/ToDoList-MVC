import {useContext, useState} from 'react';
import {TodosContext} from '../contexts/todos';
import Todo from './Todo';
const Main=()=>{
    const[todosState, dispatch] = useContext(TodosContext);
    const [editingId, setEditingId] = useState(null);
    const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";
    const getVisibleTodos=()=>{
        if(todosState.filter === "active"){
            return todosState.todos.filter(todo => !todo.isCompleted)
        }else if(todosState.filter === "completed"){
                return todosState.todos.filter(todo => todo.isCompleted)
        }
        return todosState.todos;
    };

const visibleTodos = getVisibleTodos();
const isAllTodosSelected = todosState.todos.every((todo)=> todo.isCompleted);
const onToggleAllTodos =(event)=>{
dispatch({type: "toggleAll", payload: event.target.checked});
};

return(
    <section className ={`main ${noTodosClass}`}>
        <input 
        type="checkbox" 
        id="toggle-all" 
        className="toggle-all" 
        checked={isAllTodosSelected}
        onChange={onToggleAllTodos}/>
        <label htmlFor="toggle-all">Mark all as completed</label>
        <ul className = "todo-list">
            {visibleTodos.map(todo=>(
               <Todo 
               key={todo.id} 
               todo={todo}
               isEditing = {editingId === todo.id}
               setEditingId = {setEditingId}
               />
            ))}
        </ul>
    </section>
)
}
 export default Main;