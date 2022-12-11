import React from "react";
import Input from "./Input";

const WorkUnit = (props) => {
  const hoverOn = (e) => {
    e.target.parentElement.nextElementSibling.style.backgroundColor =
      "rgba(168, 218, 220, 0.5)";
  };
  const hoverOff = (e) => {
    e.target.parentElement.nextElementSibling.style.backgroundColor = "white";
  };
  const headerText = (input) => (input === 0 ? "Work Experience" : "");
  const { id, start, finish, company, location, title, details } = props.data;
  const { edit, del, intel } = props;
  return (
    <div className="work-unit" id={id}>
      <div className="spacer"></div>
      <div className="header-unit">
        <div className="sectionTitle">{headerText(intel)}</div>
        <button
          onMouseOver={hoverOn}
          onMouseOut={hoverOff}
          onClick={del}
          title="Delete"
        ></button>
      </div>
      <div className="inputContent">
        <Input
          type="text"
          id="title"
          value={title}
          holder="Title"
          edit={edit}
        />
        <Input
          type="text"
          id="company"
          value={company}
          holder="Company"
          edit={edit}
        />
        <Input
          type="text"
          id="location"
          value={location}
          holder="Location"
          edit={edit}
        />
        <div className="dateContainer">
          <Input
            type="text"
            id="start"
            value={start}
            holder="Start"
            edit={edit}
          />
          <Input
            type="text"
            id="finish"
            value={finish}
            holder="Finish"
            edit={edit}
          />
        </div>
        <Input
          type="text"
          id="details"
          value={details}
          holder="Description"
          edit={edit}
        />
      </div>
    </div>
  );
};

export default WorkUnit;
