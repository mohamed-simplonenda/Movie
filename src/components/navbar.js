import{Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Menu({getInput,favorites}) {

    return(
        <div >
            <Navbar  expand="lg" fixed="top" >
            <div className="container">
    <Navbar.Brand href="#home">
      <img
        src="/logo.png"
        max-width= "100%"
        height= "auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
    <Link to="/">Home</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/contact">CONTACT</Link>


    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="SEARCH" onChange={getInput}  />
      <Button variant="outline-secondary"><i class="fas fa-search  "></i></Button>

    </Form>
    <Link to="/favorit"><i class="fas fa-heart iconeNav "></i><span class="badge bg-warning rounded-circle ml-1" id="val">{favorites}</span></Link>
  </Navbar.Collapse>
  </div>
</Navbar>


        </div>
    )
    
}
export default Menu