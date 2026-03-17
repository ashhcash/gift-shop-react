import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='shop'>
            <p>Shop</p>
            <ul>
                <li>All</li>
                <li>Home & Accessories</li>
                <li>Sales</li>
                <li>Bundles</li>
                <li>Gift Cards</li>
            </ul>
        </div>
        <div className='links'>
            <p>Helpful Links</p>
            <ul>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        <div className='contact'>
            <p>Contact Us</p>
            <ul>
                <li>xyz@hotmail.com</li>
                <li>1234-5634-473</li>
                <li>200, franches street,</li>
                <li>San Francisco, CA 98328</li>
            </ul>
        </div>
        <div className='socials'>
            <p>Social Media</p>
            <ul>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer