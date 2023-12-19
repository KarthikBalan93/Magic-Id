import React from 'react';
import '../css/inputComponent.css'
import { AiOutlineClose } from 'react-icons/ai';

export default function Input(props) {

    return (
        <div className="icon-input-container">
            {
                props.icon &&
                <div className="icon-container">
                    {props.icon}
                </div>
            }
            <input className="input-field" {...props}/>
            <div className="icon-container" style={{display: props.close === 'true' ? 'block': 'none', cursor: 'pointer'}} onClick={() => props.onReset && props.onReset()}>
                <AiOutlineClose />
            </div>
        </div>
    )
}
