import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card} from 'react-bootstrap';
import { Form, Container } from "react-bootstrap";
import { Button,Row,Modal,Col } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Update from '../components/update'
// import firebaseDB from "../firebase";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';





const Admin = ({movie}) => {
  const [details, setDetails] = useState({ title: '', Genre: '',Year:'' ,Images:'',Runtime:'',imdbRating:''});
  // **************************function post movie********************************************
  const handleSubmit = (e) => {
    
    e.preventDefault()
    axios
      .post('https://moviapp-91957-default-rtdb.firebaseio.com/posts.json',details)
      .then((response) => console.log(response))
      .then(res=>relaodPage())
      .catch((error) => console.log(error));
 
  }
  const relaodPage=()=>{
    window.location.reload()

  }
 
// **************************function delete movie********************************************

  const deleteMovie=(id)=> {
    axios.delete(`https://moviapp-91957-default-rtdb.firebaseio.com/posts/${id}/.json`)
    .then(response => {
        console.log("response: delete", response);
      })
      .then(res=>relaodPage())
    .catch(err=> 
      console.log(err)
    );
  }

// modal 1
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  




  return (
    <div>
        
     <Row>

     <Col lg={2}>
      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Users
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</Col>
<Col lg={10}>
  <Container>

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
              // onChange={handelInput}
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
              // onChange={handelInput}
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
              // onChange={handelInput}
              placeholder="Runtime"
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
              // onChange={handelInput}
              placeholder="Enter url image"
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
              // onChange={handelInput}
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
        
    {  Object.keys(movie).map(id=>
      <div >
          
      <Row className="pb-5">
          
      <Card style={{ width: '16rem',marginBottom:'20px' }}>
      <Card.Img variant="top" src={movie[id].Images} height="300px"  style={{borderRadius:'5px',width:'100%',objectFit:'cover'}}/>
 
        <Card.Body>
    <Card.Title className="card-title">{movie[id].title}</Card.Title>
    <Card.Text>
        <p className="card-text">{movie[id].Genre}</p>
    </Card.Text>
    <div className="d-flex justify-content-between">
    {/* <div className="card-text">{el.imdbRating}<i class="fas fa-star ml-1 rating"></i></div> */}
    <div className="card-text">{movie[id].Year}</div>
    <div className="card-text">{movie[id].Runtime}</div>
    <div className="card-text">{movie[id].imdbRating}</div>

    </div>
    <div className="d-flex justify-content-between">
     <div><Button  onClick={()=>deleteMovie(id)} className="delete "><i class="far fa-trash-alt"></i></Button></div>
     <div> <Update relaodPage={relaodPage} id={id} movie={movie}/></div>
    </div>
    <div className="d-flex justify-content-center">
    <Rater  total={5} interactive={false} rating={movie[id].imdbRating} />
    </div>
        </Card.Body>
      </Card>
      
     </Row>
    
     
     
     </div> )}
     
     </div>

     </Container>
     </Col>
     </Row>
     
    </div>
  );
};

export default Admin;