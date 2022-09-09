import React from 'react'

const TextRey = (props) => {
    const {text,style}=props.data;
    return (
      <p style={style}>{text}</p>
    )
}

export default TextRey
