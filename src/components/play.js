import React from 'react'
import Menu from './navbar';
import { Row,Button, Container,Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Rater from 'react-rater'
import { Link } from "react-router-dom";
import 'react-rater/lib/react-rater.css'



const PlayPage = ({play,input,movie,favorites,getFavorites,getFavoriteMovie,getPlay}) => {
  return(
    
       <div className="favorit">
       <Menu  />
       <h1 className="contact">play</h1>
      
        <Container>
        <div className="d-flex justify-content-between flex-wrap">
       { play.map(el=>
      
 
       <div className="movieplay mt-3 mb-5" style={{ width: '60rem'}}>
           <Row>
           <Col lg={4} >
       <img variant="left" src={el.Images} style={{ width: '15rem',height:'20rem' }}/>
           </Col>
           <Col lg={8} >
       <div>
       <div className="texxtplay"><h3>{el.title}</h3></div>
       <div>
         <div className="texxtplay">Genre : {el.Genre}</div>
         <div className="texxtplay">Date of publication : {el.Year}</div>
         <div className="texxtplay">Duration : {el.Runtime}</div>    
       </div>
         <p className="texxtplay"> {el.Plot}</p>

    <Rater  total={5} interactive={false} rating={el.imdbRating} />
    <div className="mt-3">
      
    <Button variant="outline-warning"   active>
    Watch the add
      </Button>{' '}
  <Button variant="danger"  active>
      Watching the movie
  </Button>
    </div>
       </div>
       </Col>
       </Row>
     </div>
     
     
     )}
       
       </div>
       </Container>
       <h1 className="text-center text-white">similar research</h1>
       <Container className="pb-5">
       <div className="d-flex justify-content-between flex-wrap">
       {
                   
                  
            movie.filter(
                el=>el.Genre==el.Genre
            ).map(el=>
                <div >
                
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
              {/* <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div> */}
              <div className="card-text">{el.Year}</div>
              <div className="card-text">{el.Runtime}</div>
              <div>
              <Button className="heart" onClick={() => {getFavorites() ; getFavoriteMovie(el);}}><i class="fas fa-heart  "></i></Button>
              <Link to="/play"> <Button className="play" onClick={() => { getPlay(el)}}><i class="fas fa-play"></i></Button></Link>
              </div>
          
              </div>
              <div className="d-flex justify-content-center">
              <Rater  total={5} interactive={false} rating={el.imdbRating} />
              </div>
                  </Card.Body>
                </Card>
                
              
               </div>
             
          
          
            
             )
       }
        </div> 
       </Container>
       
      
    </div>
    
   )

 }

export default PlayPage