import React from "react";

const Input = ({ placeholder, type, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input;