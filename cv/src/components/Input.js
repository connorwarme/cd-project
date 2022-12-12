import React from "react";

const Input = (props) => {
  const { type, id, value, holder, edit } = props;
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

export default Input;
