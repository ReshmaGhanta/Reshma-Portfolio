import React from 'react'

const ImageRey = (props) => {
    const {source,customStyle}=props.data;
    return (
      <img src={source} alt="Avtar" style={customStyle} />
    )
}

export default ImageRey
