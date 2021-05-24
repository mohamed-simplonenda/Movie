
import { Form, Container,Button,Row,Modal,Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";


const Update = ({el}) => {
    const [input,setInput]=useState({ title:el.title, Genre: el.Genre,Year:el.Year ,Images:el.Images,Runtime:el.Runtime,imdbRating:el.imdbRating})
    const handelCahnge=(e)=>{
        const {name,value}=e.target
        setInput({...input,[name]:value})
      }
        // function update 
  const updateMovie=(id)=> {
   
    axios.put(`http://localhost:3010/posts/${id}`,input)
    .then(response => {
      setInput( response.data);
       
      })
    .catch(err=> 
      console.log(err)
      
    );
    console.log('updateuuuuuuuuuuueeeeeee',input)
  }
  useEffect(() => {
    updateMovie() 
}, [])
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
     
    </div>
   )

 }

export default Update