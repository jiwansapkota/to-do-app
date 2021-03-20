import React from 'react'
import ListItem from './components/listItem'

function Todos(props) {

    // const [todos,setTodos]=useState({doIt:""});
    const removeTodo  = (index)=>{
        console.log("index:", index);
        const tempTodos = props.todos;
        // console.log(tempTodos);
        tempTodos.splice(index, 1);
        // console.log(tempTodos);
        props.setTodos([...tempTodos]);
    }

    const updateTodo = (index, updatedText)=>{
        console.log(index, updatedText);
        console.log("index:", index);
        const tempTodos = props.todos;
        tempTodos[index].title = updatedText;
        props.setTodos([...tempTodos]);
    }

    return (
        <div style ={{width: '70%', margin: "auto"}}>
            {
                props.todos.map((el, index)=>{
                    return <ListItem
                     key = {index}
                      title = {el.title}
                       index = {index}
                       removeTodo = {removeTodo}
                       updateTodo = {updateTodo}
                       />
                })
            }
        </div>
    )
}

export default Todos
