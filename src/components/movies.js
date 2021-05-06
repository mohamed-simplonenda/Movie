import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import { Row,Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';



function Movie () {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movies => setMovie(movies));
  }
  
  useEffect(()=> {getMovie()
  },[])

  
  return(
    
      movie.map(el=>
      <div data-aos="flip-right">
        {/* <Row>
        <Card className="card" style={{ width: '23rem', border:'none' }}>
  <Card.Img src={el.Images} height="350px" style={{borderRadius:'5px'}} alt="Card image" />
  <Card.ImgOverlay className="overlay">
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    {el.Plot}
    </Card.Text>
    <Card.Text>{el.Released}</Card.Text>
  </Card.ImgOverlay>
</Card>
        </Row> */}
      <Row className="pb-5">
      <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
      <Card.Img variant="top" src={el.Images} height="300px" style={{borderRadius:'5px'}}/>
        <Card.ImgOverlay className="overlay text-white">
    <Card.Title className="overlayText">{el.Country} / {el.Language}</Card.Title>
    <Card.Text className="overlayText">
    {el.Plot}
    </Card.Text>

  </Card.ImgOverlay>
        <Card.Body>
    <Card.Title className="card-title">{el.title}</Card.Title>
    <Card.Text>
        <p className="card-text">{el.Genre}</p>
    </Card.Text>
    <div className="d-flex justify-content-between">
    <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div>
    <div className="card-text">{el.Year}</div>
    <div className="card-text">{el.Runtime}</div>
    <div><i class="fas fa-heart  "></i></div>
    

    </div>
        </Card.Body>
      </Card>
     </Row>
     </div> 
      )
  
   )

 }

export default Movie