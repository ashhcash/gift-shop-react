import React from 'react'
import Item from './Item'
import { useRef } from 'react'
import './App.css'

const items = [
    {
        id : 1 ,
        title :  "Pattern Socks",
        image : '/images/shoe1.jpg',
        hoverImage: '/images/shoe2.jpg',
        price : "$9.99"
    },
        {
        id : 2 ,
        title :  "Daily Planner",
        image : '/images/diary1.jpg',
        hoverImage : '/images/diary2.jpg',
        price : "$11"
    },
        {
        id : 3 ,
        title :  "Tote Bag",
        image : '/images/bag1.jpg',
        hoverImage : 'images/bag2.jpg',
        price : "$20"
    },
        {
        id : 4 ,
        title :  "Phone Case",
        image : '/images/case1.jpg',
        hoverImage : 'images/case2.jpg',
        price : "$15"
    },
        {
        id : 5 ,
        title :  "Paper Clips Pack",
        image : '/images/clip1.jpg',
        hoverImage : 'images/clip2.jpg',
        price : "$5"
    },
        {
        id : 6 ,
        title :  "Notepad",
        image : '/images/note1.jpg',
        hoverImage : 'images/note2.jpg',
        price : "$10"
    },
        {
        id : 7 ,
        title :  "Pen Pack",
        image : '/images/pen1.jpg',
        hoverImage : '/images/pen2.jpg',
        price : "$5"
    }
]

const Slider = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -320,
            behavior: "smooth"
        }
    );
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 320,
            behavior: "smooth"
        }
    );
    };

    
  return (
    <div className='slider-container'>
        <div className='slider' ref={sliderRef}>
            {items.map((item) =>(
                <Item
                    key = {item.id}
                    image = {item.image}
                    hoverImage = {item.hoverImage}
                    title = {item.title}
                    price = {item.price}
                />
            ))}
        </div>
        <div className='slider-btn'>
            <div className="prev"><button  onClick={scrollLeft}>&lt;</button></div>
            <div className="next"><button  onClick={scrollRight}>&gt;</button></div>
        </div>

    </div>
  )
}


export default Slider