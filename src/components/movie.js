import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import { Row,Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



// input
function Movies ({input,movie,getFavorites,getFavoriteMovie,getPlay}) {
  // const [movie, setMovie] = useState([])
  // const getMovie = ()=>{
    
  //   fetch('movies.json').then(
  //         response => response.json()).then 
  //                  (movies => setMovie(movies));
  // }
  
  // useEffect(()=> {getMovie()
  // },[])

  
  return(
    Object.keys(movie)
   .filter((el) => {
    if (
      (movie[el].Type === "movie" && input === "") ||
      (movie[el].Type === "movie" && movie[el].title.toLowerCase().includes(input.toLowerCase()))
    ) {
      return el;
    }
  }).map(el=>
      <div >

      <Row className="pb-5">
      <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
      <Card.Img variant="top" src={movie[el].Images} height="300px" style={{borderRadius:'5px'}}/>
                {/* <Card.ImgOverlay className="overlay text-white">
                <Card.Title className="overlayText">{el.Country} / {el.Language}</Card.Title>
                <Card.Text className="overlayText">
                {el.Plot}
                </Card.Text>

            </Card.ImgOverlay> */}
        <Card.Body>
    <Card.Title className="card-title">{movie[el].title}</Card.Title>
    <Card.Text>
        <p className="card-text">{movie[el].Genre}</p>
    </Card.Text>
    <div className="d-flex justify-content-between">
    {/* <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div> */}
    <div className="card-text">{movie[el].Year}</div>
    <div className="card-text">{movie[el].Runtime}</div>
    <div>
    <Button className="heart" onClick={() => {getFavorites() ; getFavoriteMovie(movie[el]);}}><i class="fas fa-heart  "></i></Button>
    <Link to="/play"> <Button className="play" onClick={() => { getPlay(el)}}><i class="fas fa-play"></i></Button></Link>
    </div>

    </div>
    <div className="d-flex justify-content-center">
    <Rater  total={5} interactive={false} rating={movie[el].imdbRating} />
    </div>
        </Card.Body>
      </Card>
     </Row>
     </div> 


  
   ))

 }

export default Movies