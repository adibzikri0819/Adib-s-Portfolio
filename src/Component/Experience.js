import React from 'react'
import check_circle_fill from '../assets/check-circle-fill.svg';
import './Experience.css';


export default function Experience() {
  return (
    <div className='experience_container' id='experience'>
      <h1 className='experience_title'>Experience</h1>
       <div class="experience_details_container">
        <div class="experience_frontend_container">
          <h3 style={{textAlign: "center", fontSize:"30px"}}>Frontend Development</h3>
         
          <div class="box">
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">HTML</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">CSS</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">SASS</span><div class="frontend_bullet_two">Experienced</div></div>
        
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">React JS</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">Angular JS</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">Vue JS</span><div class="frontend_bullet_two">Experienced</div></div>
        
      </div>
          
        </div>
        

        <div class="experience_backend_container">
          <h3 style={{textAlign: "center", fontSize:"30px"}}>Backend Development</h3>
          <div class="box">
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">MYSQL</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">MOBX</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">Python</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">Firebase</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">Spring JWT</span><div class="frontend_bullet_two">Experienced</div></div>
        <div><img src={check_circle_fill}/><span class="frontend_bullet_one">MongoDB</span><div class="frontend_bullet_two">Experienced</div></div>


        
      </div>
        </div>
      </div>
      
    </div>
    
    
  )
}
