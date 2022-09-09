import React from 'react'

const ImageRey = (props) => {
    const {source}=props.data;
    return (
      <img src={source} alt="Avtar" />
    )
}

export default ImageRey
