import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    var [value,setValue] =useState("");



   const ChangeHandler=(event)=>{
    event.preventDefault();
        setValue(event.target.value);
    }


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form onSubmit={(e) =>{
                e.preventDefault();
                props.updateTodo(props.index, value);
                props.onClose();
                
                }
                } >
                        <input type="text" value={value} name="title" onChange={ChangeHandler} placeholder="Enter Todos"></input>
                        <br/>
                        <br/>
                        <Button type="submit" >
                            Update
                        </Button>
                        </form  > 
            {/* <SimpleModal /> */}
        </div>
    );

    return (
        <div>
            <Modal
                open={props.open}
                onClose={() =>props.onClose()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
