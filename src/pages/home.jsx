import Carousel from 'react-bootstrap/Carousel';
import tree from "../assets/im.jpg";

const Home =()=>{
    return(
        <>
            <Carousel>
      <Carousel.Item>
        <img width={"100%"} src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg' alt='not found'></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img width={"100%"} src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg' alt='not found'></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img width={"100%"} src={tree} alt='not found'></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Home