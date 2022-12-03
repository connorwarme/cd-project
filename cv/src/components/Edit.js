import React from "react";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";

class Edit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data, save, changeP, changeU  } = this.props;
        const { name, position, email, number, photo, about } = this.props.data;
        return (
            <div>
                <Personal value={data} save={save} change={changeP}/>
                <Work value={data} change={changeP}/>
                <Education data={data.unistack} change={changeU}/>
            </div>
        )
    }
}

export default Edit;