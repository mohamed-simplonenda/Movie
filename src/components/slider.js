import{Carousel} from 'react-bootstrap'
function Slider() {
    return(
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="img/movie1.webp"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="img/movie2.webp"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/movie3.webp"
      alt="Third slide"
    />

  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/movie4.webp"
      alt="4 slide"
    />

  </Carousel.Item> */}
</Carousel>


        </div>
    )
    
}
export default Slider