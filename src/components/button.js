import React from 'react'
import './button.css'

function smallButton(props) {
    return (
        <div className="buttonContainer">
        <div className="buttonWrapper">
            {props.title}
            
        </div>
        </div>
    )
}

export default smallButton