import { Carousel } from "react-bootstrap";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'


export function Carrousel() {
  return (
    <div className="container" style={{marginTop:'20px'}}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={pic1}
            alt={pic1}
          />
          <Carousel.Caption>
            <h3>Proyecto dojopy</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={pic2}
            alt={pic2}
          />
          <Carousel.Caption>
            <h3>Hola que tal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt={pic3}
          />
          <Carousel.Caption>
            <h3>Somos la tienda don pepe</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt={pic3}
          />
          <Carousel.Caption>
            <h3>Somos la tienda don pepe</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
