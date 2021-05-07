
import Slider from './slider';
import {Link} from 'react-router-dom'
import Movie from './movies';
import{Form,FormControl,Button} from 'react-bootstrap'
import React, {useState} from 'react'
import Menu from './navbar';




function Home() {
    const [input , setInput] = useState("")
    const getInput =  (event) => {
        
        setInput(event.target.value)
            }

    return(

        <div>
    <div className="App">



        <div >
           <Menu  getInput={getInput}/>
        </div>

     
    
     <div className="slider">
     <Slider  />
     </div>
     
     <h1 className="titre">Unlimited movies, TV shows and more.</h1>
     <h3 className="titre">Where you are. Cancel anytime.</h3>
     <h6 className="titre pb-3">Ready to watch Netflix? Enter your email address to subscribe or reactivate your subscription.</h6>
     <Form inline className="justify-content-center mt-4">
     <FormControl type="text" placeholder="Enter email adress"  />
     <button variant="outline-dark" className="btnFooter"><i class="fas fa-arrow-right"></i></button>
   </Form>
    <div className="container d-flex justify-content-between flex-wrap mt-5 ">
    <Movie input={input}/>
    </div>
   

   
    
    

   </div>
        </div>
    )
}
export default Home