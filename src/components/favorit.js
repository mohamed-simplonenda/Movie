import React from "react";
import Menu from "./navbar";
import { Row, Button, Container, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Footer from "./footer";

const Favorit = ({
  favorites,
  favoriteMovie,
  input,
  getInput,
  removeFavoriteMovie,
  removeFavoriteMovieAll,
}) => {
  return (
    <div>
      <div className="favorit">
        <Menu favorites={favorites} getInput={getInput} />
        <h1 className="contact">Favorit</h1>
        <Button
          variant="danger"
          onClick={() => {
            removeFavoriteMovieAll();
          }}
        >
          remove movie
        </Button>
        <Container>
          <div className="d-flex justify-content-between flex-wrap">
            {Object.keys(favoriteMovie)
              .filter((el) =>
              favoriteMovie[el].title.toLowerCase().includes(input.toLowerCase())
              )
              .map((el) => (
                <Card className="mt-3 mb-5" style={{ width: "50rem" ,backgroundColor:'transparent'}}>
                   <Row>
                    <Col lg={4}>
                      <Card.Img variant="top" src={favoriteMovie[el].Images} />
                    </Col>
                    <Col lg={8}>
                      <div>
                        <Card.Title className="card-title-favorit">
                          {favoriteMovie[el].title}
                        </Card.Title>
                        <Card.Text> {favoriteMovie[el].Plot}</Card.Text>
                        <div className="d-flex justify-content-between">
                          <p className="card-text-favorit">{favoriteMovie[el].Genre}</p>
                          <div className="card-text-favorit">{favoriteMovie[el].Year}</div>
                          <div className="card-text-favorit">{favoriteMovie[el].Runtime}</div>
                          <Rater
                            total={5}
                            interactive={false}
                            rating={favoriteMovie[el].imdbRating}
                          />
                        </div>
                        <Button
                          variant="danger"
                          onClick={() => {
                            removeFavoriteMovie(el);
                          }}
                        >
                          remove movie
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
                        //         <Card style={{ width: '16rem',border:'none',marginBottom:'20px' }}>
                        //         <Card.Img variant="top" src={favoriteMovie[el].Images} height="300px" style={{borderRadius:'5px'}}/>
 
                        //           <Card.Body>
                        //       <Card.Title className="card-title">{favoriteMovie[el].title}</Card.Title>
                        //       <Card.Text>
                        //           <p className="card-text">{favoriteMovie[el].Genre}</p>
                        //       </Card.Text>
                        //       <div className="d-flex justify-content-between">
                        //       {/* <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div> */}
                        //       <div className="card-text">{favoriteMovie[el].Year}</div>
                        //       <div className="card-text">{favoriteMovie[el].Runtime}</div>
                        //       <div>
                        //       <Button
                        //   variant="danger"
                        //   onClick={() => {
                        //     removeFavoriteMovie(el);
                        //   }}
                        // >
                        //   remove movie
                        // </Button>
                        //       </div>
                          
                        //       </div>
                        //       <div className="d-flex justify-content-center">
                        //       <Rater  total={5} interactive={false} rating={favoriteMovie[el].imdbRating} />
                        //       </div>
                        //           </Card.Body>
                        //         </Card>
              //   <Card>
              //    <Card.Img variant="top" src={favoriteMovie[el].Images} />
              //   <div>
              //     <Card.Title> {favoriteMovie[el].title}</Card.Title>
              //     <Card.Text> {favoriteMovie[el].Plot}</Card.Text>
              //           <div className="d-flex justify-content-between">
              //             <p className="card-text">{favoriteMovie[el].Genre}</p>
              //             <div className="card-text">{favoriteMovie[el].Year}</div>
              //             <div className="card-text">{favoriteMovie[el].Runtime}</div>
              //             <Rater
              //               total={5}
              //               interactive={false}
              //               rating={favoriteMovie[el].imdbRating}
              //             />
              //           </div>
              //     <Button
              //             variant="danger"
              //             onClick={() => {
              //               removeFavoriteMovie(el);
              //             }}
              //           >
              //             remove movie
              //           </Button>
              //   </div>
              // </Card>
              ))}
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Favorit;
