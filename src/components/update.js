
import { Form, Container,Button,Row,Modal,Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";


const Update = ({id,movie,relaodPage}) => {
    const [input,setInput]=useState({ title:movie[id].title, Genre: movie[id].Genre,Year:movie[id].Year ,Images:movie[id].Images,Runtime:movie[id].Runtime,imdbRating:movie[id].imdbRating})
    const handelCahnge=(e)=>{
        const {name,value}=e.target
        setInput({...input,[name]:value})
      }
     // **************************function put movie********************************************
  const updateMovie=(id)=> {
   
    axios.put(`https://moviapp-91957-default-rtdb.firebaseio.com/posts/${id}.json`,input)
    .then(response => {
      setInput( response.data);
       
      })
      .then(res=>relaodPage())
    .catch(err=> 
      console.log(err)
      
    );
    console.log('updateuuuuuuuuuuueeeeeee',input)
  }
  
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  return(
    <div>
          <Button  onClick={handleShow1} className="edit "><i class="fas fa-edit"></i></Button>
         <Modal show={show1} onHide={handleClose1}>
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
              defaultValue={movie[id].title}
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
            defaultValue={movie[id].Genre}
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
            defaultValue={movie[id].Year}
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
            defaultValue={movie[id].Runtime}
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
            defaultValue={movie[id].Images}
              type="text"
              name="Images"
              
                            onChange={handelCahnge}

              placeholder="Enter url image"
            />

          </Form.Group>
          <Form.Group>
            <Form.Label>Rating movie</Form.Label>
            <br></br>
            <Form.Control
            defaultValue={movie[id].imdbRating}
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
          <Button onClick={()=>updateMovie(id)} variant="primary"  className="submit">
            update
          </Button>
          </div>
        </Form>
      </Container>

        </Modal.Body>
      </Modal>
     
    </div>
   )

 }

export default Update