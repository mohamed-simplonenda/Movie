import React from 'react'
import Menu from './navbar';



const Favorit = ({favorites}) => {
  return(
    <div>
       <Menu favorites={favorites}/>
        <h1 className="pt-5">FAVORITE</h1>
    </div>
   )

 }

export default Favorit