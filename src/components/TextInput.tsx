import React from 'react';
import './TextInput.css';

function TextInput(props: {
    label: string,
    value: string,
    onChange:  (e: any) => any
}) {
    return (
            <div className="TextInput__Container">
                <div className="TextInput__Label">
                    {props.label}
                </div>
                <input
                    className="TextInput__Input"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        );
}

export default TextInput;