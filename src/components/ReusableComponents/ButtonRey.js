import React from 'react'

const ButtonRey = (props) => {
    const {label,onClick}=props.data;
    return (
      <button onClick={onClick}>
        {label}
      </button>
    );
}

export default ButtonRey
