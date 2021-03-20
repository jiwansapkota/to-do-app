import React from 'react'
import "./card.css"
// import { Button } from '@material-ui/core';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';



function Card(props) {

    var [value,setValue] =useState("");

    const AddHandler=(event)=>{
        event.preventDefault(); 
        var newValue= props.todos;
        newValue.push({title:value});
        props.setTodos([...newValue]);
        setValue("");

    }


   const ChangeHandler=(event)=>{
    event.preventDefault();
        setValue(event.target.value);
    }

    return (
        <div className='card'>
            <div className="cardWrapper">
                <div className="titleInputFieldWrapper">
                   <form onSubmit={AddHandler} >
                        <input type="text" value={value} name="title" onChange={ChangeHandler} placeholder="Enter Todos"></input>
                        <br/>
                        <br/>
                        <Button type="submit" >
                            Add
                        </Button>
                        </form  > 
                        {/* <BootstrapButton variant="contained" color="primary">
                            Add
                        </BootstrapButton> */}
                  
                </div>
                
        
            </div>
            
        </div>
    )
}

export default Card
