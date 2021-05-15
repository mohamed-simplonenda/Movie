import React from 'react'
import Menu from './navbar';
import { Row,Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



const Favorit = ({favorites,favoriteMovie}) => {
  return(
    <div >
       <Menu favorites={favorites}/>
        <h1 className="pt-5">FAVORITE</h1>
        <div className="container d-flex justify-content-between flex-wrap mt-5 ">
       { favoriteMovie.map(el=>
         <Row className="pb-5">
         <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
         <Card.Img variant="top" src={el.Images} height="300px" style={{borderRadius:'5px'}}/>
         {/* <Card.ImgOverlay className="overlay text-white">
       <Card.Title className="overlayText">{el.Country} / {el.Language}</Card.Title>
       <Card.Text className="overlayText">
       {el.Plot}
       </Card.Text>
   
     </Card.ImgOverlay> */}
           <Card.Body>
       <Card.Title className="card-title">{el.title}</Card.Title>
       <Card.Text>
           <p className="card-text">{el.Genre}</p>
       </Card.Text>
       <div className="d-flex justify-content-between">
       <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div>
       <div className="card-text">{el.Year}</div>
       <div className="card-text">{el.Runtime}</div>
       
       
   
       </div>
       <div className="d-flex justify-content-center">
       <Rater  total={5} interactive={false} rating={el.imdbRating} />
       </div>
           </Card.Body>
         </Card>
        </Row>)}
        </div>
    </div>
   )

 }

export default Favorit