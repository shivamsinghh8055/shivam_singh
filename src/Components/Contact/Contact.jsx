import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import  { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e024e7be-e95c-45d5-8bf6-338c56fa8f38");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
            setName('');
            setEmail('');
            setMessage('');
        }
      };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently on my notice period and actively seeking new opportunities as a Software Development Engineer (SDE). With 1 year of experience in Quality Assurance and a passion for creating efficient, high-quality software, I am eager to transition into an SDE role.

                        If you have or know of any openings, I'd love to connect! So feel free to send a message.</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /><p>shivamsinghh8055@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /><p>+919628719927</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /><p>Jaunpur, Uttar Pradesh</p>
                            </div>
                        </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="">Your Email</label>
                    <input type="text" name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact