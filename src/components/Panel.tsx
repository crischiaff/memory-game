import React from 'react';

function Panel(props: {
    children: React.ReactNode,
    centered: boolean
}) {


    return (
        <div
            className={
                "Panel__Container " +
                (props.centered ? "Panel__Container__centered" : "")
            }
        >
            {props.children}
        </div>
        );
}

export default Panel;