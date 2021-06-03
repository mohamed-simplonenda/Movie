
import Slider from './slider';
import {Link} from 'react-router-dom'
import Series from './serie';
import{Form,FormControl,Button} from 'react-bootstrap'
import React, {useState} from 'react'
import Menu from './navbar';
import Footer from './footer';




function SeriePage({input,getInput,movie,favorites,getFavorites,getFavoriteMovie,getPlay}) {
    

    return(

        <div>
    <div className="App">



        <div >
           <Menu  getInput={getInput} favorites={favorites} />
        </div>

     
    
     <div>
     {/* <Slider  /> */}
     <img
        src="/img/jakob-owens-CiUR8zISX60-unsplash.jpg"
        width= "100%"
        height= "auto"

      />
     </div>
     
     
     <Form inline className="justify-content-center mt-4">
     <FormControl type="text" placeholder="Enter name film" onChange={getInput}  />
     <button variant="outline-dark" className="btnFooter"><i class="fas fa-arrow-right"></i></button>
   </Form>
    <div className="container d-flex justify-content-between flex-wrap mt-5 ">
    <Series input={input} movie={movie} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie} getPlay={getPlay}/>
    </div>
   

   
    
    

   </div>
   <Footer/>
        </div>
    )
}
export default SeriePage  
