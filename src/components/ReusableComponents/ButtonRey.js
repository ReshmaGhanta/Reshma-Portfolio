import React from 'react';
import '../../styles/viewsStyle/Button.css'

const ButtonRey = (props) => {
    const {label,onClick,customStyle}=props.data;
    return (
      <button className='bttn' onClick={onClick} style={customStyle}>
        {label}
      </button>
    );
}

export default ButtonRey
