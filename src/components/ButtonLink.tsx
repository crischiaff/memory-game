import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Button(props: {
    to: string,
    children: React.ReactNode,
    disabled?: boolean,
    onClick?: (e: any) => void
}) {
    return (
        <Link onClick={props.onClick} className={"ButtonLink__Container__" + (props.disabled ? "disabled" : "enabled")} to={props.to}>
            <div className="ButtonLink__Content">
                {props.children}
            </div>
        </Link>
        );
}

export default Button;