import React from 'react'
import './App.css'
const Item = ({image , title , price}) => {
    
  return (
    <div className='item-container'>
        <img src = {image} alt = {title} className='item-img'></img>
        <div className='item-title'>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Item