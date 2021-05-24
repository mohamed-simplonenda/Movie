import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card} from 'react-bootstrap';
import { Form, Container } from "react-bootstrap";
import { Button,Row,Modal,Col } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Update from '../components/update'





const Admin = ({movie}) => {
  const [details, setDetails] = useState({ title: "", Genre: "",Year:"" ,Images:"",Runtime:"",imdbRating:""});

  const handleSubmit = () => {
    
    axios
      .post("http://localhost:3010/posts",details)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  const deleteMovie=(id)=> {
    axios.delete(`http://localhost:3010/posts/${id}`)
    .then(response => {
        console.log("response: delete", response);
      })
    .catch(err=> 
      console.log(err)
    );
  }
//   const [input,setInput]=useState({ title:details.title, Genre: details.Genre,Year:details.Year ,Images:details.Images,Runtime:details.Runtime,imdbRating:details.imdbRating})
//   const handelCahnge=(e)=>{
//    const {name,value}=e.target
//    setInput({...input,[name]:value})
//  }
  
//   // function update 
//   const updateMovie=(id)=> {
   
//     axios.put(`http://localhost:3010/posts/${id}`,input)
//     .then(response => {
//       setInput( response.data);
       
//       })
//     .catch(err=> 
//       console.log(err)
      
//     );
//     console.log('updateuuuuuuuuuuueeeeeee',input)
//   }
//   useEffect(() => {
//     updateMovie() 
// }, [])
// modal 1
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
// modal 2
  // const [show1, setShow1] = useState(false);
  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);



  return (
    <div>
        <Container>
      <Row>
    
      {/* <Col lg={3}>
        </Col> */}
       <Col lg={12}>
      <div className="d-flex justify-content-center mt-5 mb-5">
      <Button variant="success"  onClick={handleShow}>
        Add movie
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form onSubmit={handleSubmit} >
          <Form.Group>
            <Form.Label>title movie</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="title"
              value={details.title}
              onChange={(e) =>
                setDetails({ ...details, title: e.target.value })
              }
              placeholder="Enter title"
            />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>


          <Form.Group>
            <Form.Label>genre</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="genre"
              value={details.Genre}
              onChange={(e) =>
                setDetails({ ...details, Genre: e.target.value })
              }
              // onChange={handleChange}
              placeholder="genre"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>year</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="year"
              value={details.Year}
              onChange={(e) =>
                setDetails({ ...details, Year: e.target.value })
              }
              // onChange={handleChange}
              placeholder="year"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Runtime</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="time"
              value={details.Runtime}
              onChange={(e) =>
                setDetails({ ...details, Runtime: e.target.value })
              }
              // onChange={handleChange}
              placeholder="year"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>image movie</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="title"
              value={details.Images}
              onChange={(e) =>
                setDetails({ ...details, Images: e.target.value })
              }
              placeholder="Enter url"
            />

          </Form.Group>
          <Form.Group>
            <Form.Label>Rating movie</Form.Label>
            <br></br>
            <Form.Control
              type="text"
              name="raiting"
              value={details.imdbRating}
              onChange={(e) =>
                setDetails({ ...details, imdbRating: e.target.value })
              }
              placeholder="Enter rating movie"
            />

          </Form.Group>
          <div className="d-flex justify-content-end">
          <Button variant="secondary" className="mr-3" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
          </div>
        </Form>
      </Container>
           
        </Modal.Body>
      </Modal>
      
       
        
      <div className="d-flex justify-content-between flex-wrap">
        
    {  movie.map(el=>
      <div >
          
      <Row className="pb-5">
          
      <Card style={{ width: '16rem',marginBottom:'20px' }}>
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
     <div><Button  onClick={()=>deleteMovie(el.id)} className="delete "><i class="far fa-trash-alt"></i></Button></div>
     <div> <Update el={el}/></div>
    </div>
    

    </div>
    <div className="d-flex justify-content-center">
    <Rater  total={5} interactive={false} rating={el.imdbRating} />
    </div>
        </Card.Body>
      </Card>
      
     </Row>
    
     {/* <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>update movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form >
          <Form.Group>
            <Form.Label>title movie</Form.Label>
            <br></br>
            <Form.Control
              defaultValue={el.title}
              type="text"
              name="title"
              onChange={handelCahnge}
              placeholder="Enter title"
            />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>


          <Form.Group>
            <Form.Label>genre</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={el.Genre}
              type="text"
              name="Genre"
              
                            onChange={handelCahnge}

              // onChange={handleChange}
              placeholder="genre"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>year</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={el.Year}
              type="text"
              name="Year"
              
                            onChange={handelCahnge}

              // onChange={handleChange}
              placeholder="year"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Runtime</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={el.Runtime}
              type="text"
              name="Runtime"
              
                            onChange={handelCahnge}

              // onChange={handleChange}
              placeholder="Runtime"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>image movie</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={el.Images}
              type="text"
              name="Images"
              
                            onChange={handelCahnge}

              placeholder="Enter url"
            />

          </Form.Group>
          <Form.Group>
            <Form.Label>Rating movie</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={el.imdbRating}
              type="text"
              name="imdbRating"
              
                            onChange={handelCahnge}

              placeholder="Enter rating movie"
            />

          </Form.Group>
          <div className="d-flex justify-content-end">
          <Button variant="secondary" className="mr-3" onClick={handleClose1}>
            Close
          </Button>
          <Button onClick={()=>updateMovie(el.id)} variant="primary"  className="submit">
            update
          </Button>
          </div>
        </Form>
      </Container>

        </Modal.Body>
      </Modal>
     */}
     
     </div> )}
     
     </div>

    
     
     </Col>
     </Row>
     </Container>
    </div>
  );
};

export default Admin;