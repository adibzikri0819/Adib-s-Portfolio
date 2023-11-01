import React from 'react'
import './Contact.css';
import envelope_fill from '../assets/envelope-fill.svg'
import linkedin from '../assets/linkedin.svg'

export default function Contact() {
  return (
    <div className="contact_container" id='contact'>
      <h1 class="contact_title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={envelope_fill}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:adibzikri0819@gmail.com">adibzikri0819@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/adib-zikri-9b2261230/">LinkedIn</a></p>
        </div>
      </div>
    </div>
  )
}
