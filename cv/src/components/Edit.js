import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

const Edit = (props) => {
    const { data, work, ed, save, changeP, changeW, changeE, showD, clear } = props;
    return (
      <div className="editContent">
        <Personal data={data} save={save} change={changeP} />
        <Work data={work} change={changeW} show={showD} clear={clear}/>
        <Education data={ed} change={changeE} show={showD} clear={clear}/>
      </div>
    );
  }

export default Edit;
