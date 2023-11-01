import React from 'react'
import about_me_pic from '../assets/about_me_pic.jpg'
import Button from '@mui/material/Button';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import resume from '../assets/adib_resume.pdf'
import './Header.css';

export default function Header() {
  return (
    <div className='header_container'>
       
      <div class="section__pic-container">
      <img src={about_me_pic} alt='' className='header_pic' />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Adib Zikri</h1>
        <p class="section__text__p2">Java Developer</p>
        <div class="btn-container">

           <Button variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
              borderRadius: "2.5rem",
              fontFamily: "'Poppins', sans-serif",
              ":hover":{
                bgcolor: "grey",
                borderColor: "black",
                color: "white"
              }
            }}
            href={resume} download="adib_resume"
              >Download CV
            </Button>

           &nbsp;&nbsp;&nbsp;

           <Button variant="contained"
            sx={{
              backgroundColor: "black",
              borderRadius: "2.5rem",
              fontFamily: "'Poppins', sans-serif",
              ":hover":{
                bgcolor: "grey",
                borderColor: "black",
                color: "white"
              },
              boxShadow: "none"
              }}
              href='#contact'
              >Contact Info
            </Button>
           
        </div>
        <div className='icon-container'>
          <a href='https://www.linkedin.com/in/adib-zikri-9b2261230/'><img
            src={linkedin}
            alt="LinkedIn icon"
            class="linkedin_header_icon"
            href="https://www.linkedin.com/in/adib-zikri-9b2261230/"
          /></a>
        
          &nbsp;&nbsp;&nbsp;
          <a href='https://github.com/adibzikri0819?tab=repositories'>
          <img
            src={github}
            alt="Github icon"
            class="github_header_icon"
            href="https://github.com/adibzikri0819?tab=repositories"
          />
          </a>
        </div>
      </div>
   
    </div>
  )
}
