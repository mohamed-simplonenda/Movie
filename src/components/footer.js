import {Row,Col,Container,Form,FormControl,Button} from 'react-bootstrap';

function Footer() {
    return(
        <div className="footer">
         <Container>
  <Row>
    <Col lg={3} xs={6} sm={12}>
    
    <img
        src="/footer-logo.png"
        max-width= "100%"
        height= "auto"
        className="mb-5"
        alt="React Bootstrap logo"
      />
      <p>SUBSCRIBE NEWSLETTER</p>
      <Form inline className="mt-4">
      <FormControl type="text" placeholder="Enter email adress"  />
      <button variant="outline-dark" className="btnFooter"><i class="fas fa-arrow-right"></i></button>
    </Form>

    <Row className="pt-5">

  <i class="fab fa-facebook-f ml-3  icone"></i>
  <i class="fab fa-twitter ml-4 icone"></i>
  <i class="fab fa-instagram ml-4 icone"></i>
  <i class="fab fa-youtube ml-4 icone"></i>

  </Row>
    

    
    </Col>
    <Col lg={3} xs={6} sm={12}>
 
    <p>CONTACT US</p>
    <li><a href="#"><i class="fas fa-map-marker-alt pr-3"></i>6890 Blvd, The Bronx, NY 1058 New York, USA</a></li>
    <li><a href="#"><i class="far fa-envelope mr-3"></i>hello@vidnext.com
<br/>          Skype: example</a></li>
    <li><a href="#"><i class="fas fa-phone-alt pr-3"></i>+1 587 785 4578
<br/>+1 485 456 0102
</a></li>

    </Col>
    <Col lg={3} xs={6} sm={12}>
    <p>ADDITIONAL LINKS</p>
    <li><a href="#">About</a></li>
    <li><a href="#">Latest Videos</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Help (FAQ)</a></li>
    <li><a href="#">CONTACT</a></li>
    

    </Col>
    <Col lg={3} xs={6} sm={12}>
    <p>INSTAGRAM</p>

    <div className="d-flex justify-content-center">
    <img
        src="/img/footer1.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />
          <img
        src="/img/footer2.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />
          <img
        src="/img/footer3.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />

        </div>
        <div className="d-flex justify-content-center">
    <img
        src="/img/footer4.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />
          <img
        src="/img/footer5.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />
          <img
        src="/img/footer6.jpg"
        max-width= "100%"
        height= "auto"
        className="mr-2 mb-2"
        alt="React Bootstrap logo"
      />

        </div>
    </Col>
  </Row>
  <hr className="mt-5 mb-3" color="#dadada " />
  <div className="d-flex justify-content-center">
  <h3>Copyright @2020 VidNext. Designed By MedMansour</h3>
  </div>


 
  

</Container>


        </div>
    )
    
}
export default Footer