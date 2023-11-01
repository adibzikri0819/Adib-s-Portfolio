import React from 'react'
import './Project.css';
import manganese_pic from '../assets/manganese_pic.png'
import comingsoon_pic from '../assets/comingsoon_pic.jpg'
import spiderman2_ps5 from '../assets/parallax_spiderman2.jpg'
import Button from '@mui/material/Button';

export default function Project() {
  return (
    <div className='project_container' id='project'>
    <h1 className='project_title'>Projects</h1>
     <div class="project_details_container">
      <div class="manganese_container">
        <img src={manganese_pic} alt='' className='manganese_pic'/>
        <h3 style={{textAlign: "center"}}>Manganese</h3>
        <div className='button-div'>
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
            href='https://github.com/adibzikri0819/manganese_web'
              >GitHub
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
              href='https://poetic-peony-a8e898.netlify.app/'
              >Live Demo
            </Button>
        </div>
           
      </div>

      <div class="todolist_container">
      <img src={spiderman2_ps5} alt='' className='manganese_pic'/>
        <h3 style={{textAlign: "center"}}>Parallax Spider-Man 2</h3>
        <div className='button-div'>
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
            href='https://github.com/adibzikri0819/react_test'
              >GitHub
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
              href='https://verdant-chimera-67efaf.netlify.app/'
              >Live Demo
            </Button>
        </div>
      </div>
      
    </div>
  </div>
  )
}
