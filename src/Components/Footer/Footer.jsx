import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Shivam Singh. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy policies</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer