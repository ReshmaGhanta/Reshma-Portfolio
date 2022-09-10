import React from 'react'

const ButtonRey = (props) => {
    const {label,onClick,customStyle}=props.data;
    return (
      <button onClick={onClick} style={customStyle}>
        {label}
      </button>
    );
}

export default ButtonRey
