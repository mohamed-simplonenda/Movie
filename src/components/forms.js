
// import { Form, Container } from "react-bootstrap";
// import { Button } from 'react-bootstrap';
// import axios from "axios";
// import React, { useState } from "react";



// const FormAdmin = () => {
//     const [details, setDetails] = useState({ title: "", Genre: "",Year:"" ,Images:"",Runtime:"",imdbRating:""});

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       axios
//         .post("http://localhost:3010/posts",details)
//         .then((response) => console.log(response))
//         .catch((error) => console.log(error));
//     }
//     // Modal

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
  
//   return(
//     <div>
//               <Container>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group>
//             <Form.Label>title movie</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="title"
//               value={details.title}
//               onChange={(e) =>
//                 setDetails({ ...details, title: e.target.value })
//               }
//               placeholder="Enter title"
//             />
//             <Form.Text className="text-muted">
              
//             </Form.Text>
//           </Form.Group>


//           <Form.Group>
//             <Form.Label>genre</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="genre"
//               value={details.Genre}
//               onChange={(e) =>
//                 setDetails({ ...details, Genre: e.target.value })
//               }
//               // onChange={handleChange}
//               placeholder="genre"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>year</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="year"
//               value={details.Year}
//               onChange={(e) =>
//                 setDetails({ ...details, Year: e.target.value })
//               }
//               // onChange={handleChange}
//               placeholder="year"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Runtime</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="time"
//               value={details.Runtime}
//               onChange={(e) =>
//                 setDetails({ ...details, Runtime: e.target.value })
//               }
//               // onChange={handleChange}
//               placeholder="year"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>image movie</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="title"
//               value={details.Images}
//               onChange={(e) =>
//                 setDetails({ ...details, Images: e.target.value })
//               }
//               placeholder="Enter url"
//             />

//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Rating movie</Form.Label>
//             <br></br>
//             <Form.Control
//               type="text"
//               name="raiting"
//               value={details.imdbRating}
//               onChange={(e) =>
//                 setDetails({ ...details, imdbRating: e.target.value })
//               }
//               placeholder="Enter rating movie"
//             />

//           </Form.Group>
//           <div className="d-flex justify-content-end">
//           <Button variant="secondary" className="mr-3" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" type="submit" className="submit">
//             Submit
//           </Button>
//           </div>
//         </Form>
//       </Container>

//     </div>
//    )

//  }

// export default FormAdmin