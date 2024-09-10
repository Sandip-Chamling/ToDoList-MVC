import { useState, useContext } from "react";
import {TodosContext} from '../contexts/todos';

const Todo = ({todo, isEditing, setEditingId}) =>{
    const[,dispatch]= useContext(TodosContext);
    const [editText,setEditText]= useState(todo.text);
    const editingClass =isEditing ? "editing" : "";
    const completedClass = todo.isCompleted? "completed" : "";
    const setTodoInEditingMode =()=>{
        setEditingId(todo.id);
    };
    const changeEditInput = (e) =>{
        setEditText(e.target.value);
    };
    const toggleTodo=()=>{
        dispatch({type:"toggleTodo", payload:todo.id,});
    };
    const keyDownEditInput = (e) =>{
        if(e.key ==="Enter"){
            dispatch({
                type:"changeTodo",
                payload:{ id: todo.id, text: e.target.value },
            });
            setEditingId(null);
        }

        if(e.key==="Escape"){
            setEditText(todo.text);
            setEditingId(null);
        }
    };
    const removeTodo=()=>{
        dispatch({type:"removeTodo", payload:todo.id,});
    }
 return (
    <li className={`${editingClass} ${completedClass}`} >
        <div className = "view">
            <input type="checkbox" className="toggle" onChange={toggleTodo} />
            <label onDoubleClick={setTodoInEditingMode}>{todo.text}</label>
            <button className="destroy" onClick={removeTodo}></button>
        </div>

        {isEditing && <input className="edit" value={editText} 
        onChange={changeEditInput}
        onKeyDown={keyDownEditInput}/>}
    </li>
    );
};
export default Todo;