import React, { useState } from 'react'
import { Edit, Delete, CheckCircle, CheckCircleOutlineOutlined } from '@material-ui/icons';
import SimpleModal from './modal';
import './listItem.css';



function ListItem(props) {
    const { title } = props;
    var [ischecked, changeIsChecked] = useState(false);
    var [doEdit, setDoEdit] = useState(false);

    return (
        <div className="listItem">
            <div className="left">
                <div className="checkbox" onClick={() => { changeIsChecked(!ischecked) }}>{!ischecked ? <CheckCircleOutlineOutlined /> : <CheckCircle />}</div>
                <div className={`titleName ${ischecked ? 'done' : ''}`}>{title}</div>
            </div>
            <div className="right">
                <div className="editWrapper" onClick={() => {setDoEdit(!doEdit);console.log(doEdit)}}><Edit /></div>
                <SimpleModal open = {doEdit} onClose = {setDoEdit} updateTodo = {props.updateTodo} index = {props.index}/>


                <div onClick={() => props.removeTodo(props.index)}><Delete /></div>
            </div>
        </div>
    )
}

export default ListItem
