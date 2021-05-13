import React from 'react'
import Menu from './navbar';



const About = ({favorites}) => {
  return(
    <div>
       <Menu favorites={favorites}/>
        <h1 className="pt-5">About</h1>
    </div>
   )

 }

export default About