import React, { useState } from "react";

const WorkMock = (props) => {

    const [unit, setUnit] = useState({
        id: props.id,
        title: "",
        company: "",
        location: "",
        start: "",
        finish: "",
        details: "",
    })
    const updateList = () => {
        const copyList = [...props.list];
        let itemIndex = copyList.indexOf(item => item.id === unit.id);
        copyList[itemIndex] = unit;
        console.log(copyList);
        props.set(copyList);
    }
    const editUnit = (e) => {
        setUnit({...unit, [e.target.id]: e.target.value});
        updateList();
    }


    return (
        <div id={unit.id}>
            <input id="title" value={unit.title} onChange={editUnit} />
            <input id="company" value={unit.company} onChange={editUnit} />
            <input id="location" value={unit.location} onChange={editUnit} />
            <button onClick={props.del}>Delete</button>
        </div>
    )
}

export default WorkMock;