import React from "react";
import Input from "./Input";
import "../styles/Personal.css";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, position, email, number, location, photo, bio } = this.props.value;
        const { save, change } = this.props;
        return (
            <div className="personal">
              <div className="personal-title">Personal Details</div>
              <form onSubmit={save}>
                <Input type="text" id="name" value={name} holder="Name" edit={change} />
                <Input type="text" id="position" value={position} holder="Title" edit={change} />
                <Input type="tel" id="number" value={number} holder="Phone Number" edit={change} />
                <Input type="email" id="email" value={email} holder="Email" edit={change} />
                <Input type="text" id="location" value={location} holder="Location" edit={change} />
                <Input type="file" id="photo" value={photo} edit={change} />
                <textarea id="bio" value={bio} placeholder="About Me" onChange={change}></textarea>
                <button type="submit">Save</button>
              </form>
            </div>
        )
    }
}

export default Personal;