import React from "react";
import Input from "./Input";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, position, email, number, location, photo, bio } = this.props.value;
        const { save, change } = this.props;
        return (
            <div className="personal">
            Personal Details
              <form onSubmit={save}>
                <Input type="text" name="name" value={name} holder="Name" edit={change} />
                <Input type="text" name="position" value={position} holder="Title" edit={change} />
                <Input type="tel" name="number" value={number} holder="Phone Number" edit={change} />
                <Input type="email" name="email" value={email} holder="Email" edit={change} />
                <Input type="text" name="location" value={location} holder="Location" edit={change} />
                <Input type="file" name="photo" value={photo} edit={change} />
                <Input type="textarea" name="bio" value={bio} holder="About Me" edit={change} />
                <button type="submit">Save</button>
              </form>
            </div>
        )
    }
}

export default Personal;