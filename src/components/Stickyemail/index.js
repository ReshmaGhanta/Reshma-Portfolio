import React from 'react'
import TextRey from '../ReusableComponents/TextRey'
import { Container } from "react-bootstrap";
import { verticalText,LineStyle } from '../../styles/ComponentsStyle/StickyemailStyle';

console.log(verticalText)
const StickyEmail = () => {
  return (
            <TextRey data={{text:"reshma.ghanta@gmail.com __________________", style:verticalText}}></TextRey>         
  )
}

export default StickyEmail