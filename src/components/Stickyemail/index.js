import React from 'react'
import TextRey from '../ReusableComponents/TextRey'

import { verticalText } from '../../styles/ComponentsStyle/StickyemailStyle';

//console.log(verticalText)
const StickyEmail = () => {
  /* const[fixEmail,setFixEmail]=useState(false)
  
  const changeBackground=()=>{
    console.log(window.scrollY)
    if(window.scrollY>=360)
    {
        setFixEmail(true);
    }else{
        setFixEmail(false);
    }
}  

useEffect(()=>{
    window.addEventListener('scroll',changeBackground)
})  */
  return (
       //  <div style={fixEmail ? verticalTextFixed : verticalText }> 
         <div>

         <TextRey data={{text:"reshma.ghanta@gmail.com ______________________", style:verticalText}}></TextRey>      
        </div>    
  )
}

export default StickyEmail