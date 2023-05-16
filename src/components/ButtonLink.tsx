import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Button(props: {
    to: string,
    children: React.ReactNode
}) {
    return (
        <Link className="ButtonLink__Container" to={props.to}>
            <div className="ButtonLink__Content">
                {props.children}
            </div>
        </Link>
        );
}

export default Button;