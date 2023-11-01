import React from 'react'
import about_pic_alt from '../assets/about-pic.png'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import './About.css';




export default function About() {
  return (
    
    <div className='about_me_container' id='about'>
      <div className='about_me_pic_container'>
          <h1 className='about_me_title'>About Me</h1>
          <div className="pic-container">
          <img src={about_pic_alt} alt='' className='about_me_pic' />
          </div>

       <div className='about_experience_container'>
        <WorkspacePremiumIcon sx={{fontSize: "30px", marginTop: "10px"}}/>
          <h3 style={{lineHeight: "0.1"}}>Experience</h3>
          <p>2+ years <br />Frontend Development</p>
       </div>

      


       <div className='about_education_container'>
        <SchoolIcon sx={{fontSize: "30px", marginTop: "10px"}}/>
          <h3 style={{lineHeight: "0.1"}}>Education</h3>
          <p>Universiti Teknologi Petronas <br />Bachelor of Information Technology (Hons)</p>
       </div>

       <div className="text_container">
            <p>
            Independent and self-motivated Information Technology graduate that is looking for a position as a Junior 
            Java Developer, always treading new waters and open to learning new knowledge.
            </p>
          </div>
       

      </div>
    </div>
    

    
  )
}
