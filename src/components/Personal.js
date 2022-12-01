import React from "react";
import Input from "./Input";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, position, email, number, photo } = this.props.value;
        const { save, change } = this.props;
        return (
            <div className="card">
              <form onSubmit={save}>
                <Input type="text" name="name" value={name} edit={change} />
                <Input type="text" name="position" value={position} edit={change} />
                <Input type="tel" name="number" value={number} edit={change} />
                <Input type="email" name="email" value={email} edit={change} />
                <Input type="file" name="photo" value={photo} edit={change} />
                <button type="submit">Save</button>
              </form>
            </div>
        )
    }
}

export default Personal;