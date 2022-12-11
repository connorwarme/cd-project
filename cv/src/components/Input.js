import React from "react";

class Input extends React.Component {
  render() {
    const { type, id, value, holder, edit } = this.props;
    return (
      <div>
        <label htmlFor={id} value={holder}></label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={holder}
          onChange={edit}
        ></input>
      </div>
    );
  }
}

export default Input;
