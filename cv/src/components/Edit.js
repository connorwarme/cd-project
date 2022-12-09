import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, save, changeP, changeW, changeU } = this.props;
    return (
      <div className="editContent">
        <Personal value={data} save={save} change={changeP} />
        <Work data={data.workstack} change={changeW} />
        <Education data={data.unistack} change={changeU} />
      </div>
    );
  }
}

export default Edit;
