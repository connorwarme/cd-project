import React from "react";
import Personal from "./Personal";
import Work from "./Work";

class Edit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data, save, changeP  } = this.props;
        const { name, position, email, number, photo, about } = this.props.data;
        return (
            <div>
                <Personal value={data} save={save} change={changeP}/>
                <div className="card">
                    <h1>Name: {name}</h1>
                    <h2>Position: {position}</h2>
                    <h3>Phone: {number}</h3>
                    <h3>Email: {email}</h3>
                    <div>Photo: {photo}</div>
                    <button onClick={()=>this.editCard()}>Edit</button>
                </div>
                <Work value={data} change={changeP}/>
                
            </div>
        )
    }
}

export default Edit;