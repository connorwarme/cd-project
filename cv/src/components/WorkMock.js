import React, { useState } from "react";

const WorkMock = (props) => {
    const { id, title, company, location } = props.data;
    const { edit, del } = props;
    const editUnit = (e) => {
        console.log(e.target.id)
    }
    return (
        <div id={id}>
            <input id="title" value={title} onChange={edit} />
            <input id="company" value={company} onChange={edit} />
            <input id="location" value={location} onChange={edit} />
            <button onClick={del}>Delete</button>
        </div>
    )
}

export default WorkMock;