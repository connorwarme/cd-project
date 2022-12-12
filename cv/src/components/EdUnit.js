import React from "react";
import Input from "./Input";

const EdUnit = (props) => {
  const hoverOn = (e) => {
    e.target.parentElement.nextElementSibling.style.backgroundColor =
      "rgba(168, 218, 220, 0.5)";
  }
  const hoverOff = (e) => {
    e.target.parentElement.nextElementSibling.style.backgroundColor = "white";
  }
  const { id, school, location, degree, from, to, details } = props.data;
  const { edit, del, intel } = props;
  const  headerText = (input) =>{
      return input === 0 ? "Education" : "";
    }
    return (
      <div className="ed-unit" id={id}>
        <div className="spacer"></div>
        <div className="header-unit">
          <div className="sectionTitle">{headerText(intel)}</div>
          <button
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={del}
            title="Delete"
          ></button>
        </div>
        <div className="inputContent">
          <Input
            type="text"
            id="school"
            value={school}
            holder="University"
            edit={edit}
          />
          <Input
            type="text"
            id="location"
            value={location}
            holder="Location"
            edit={edit}
          />
          <Input
            type="text"
            id="degree"
            value={degree}
            holder="Degree"
            edit={edit}
          />
          <div className="dateContainer">
            <Input
              type="text"
              id="from"
              value={from}
              holder="Start Date"
              edit={edit}
            />
            <Input
              type="text"
              id="to"
              value={to}
              holder="Graduation Date"
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
  }

export default EdUnit;
