import {useState,useContext} from 'react';
import {TodosContext} from '../contexts/todos';

const Header=()=>{
    const[text, setText]= useState("");

    const[, dispatch] = useContext(TodosContext);
    
    const changeText=(event)=>{
        setText(event.target.value);
    }

    const keydownText=(event)=>{
        const isEnter = event.key==="Enter";
        const newText = text.trim();
        const isTextPresent = newText.length>0;
        if (isEnter && isTextPresent){
           dispatch({type:"addTask", payload: newText});
           setText("");

        }
    };

    return (
    <header className="header">
        <h1>todos</h1>
        <input type="text" 
        className="new-todo"
         placeholder="what needs to be done" 
         autoFocus
         value={text}
         onChange={changeText}
         onKeyDown={keydownText}
         />
    </header>
    );
};
export default Header;