import React from 'react';

const Button = ({text, type, onClick}) => {
    return (
        <button onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default Button;