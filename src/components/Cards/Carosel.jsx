import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/1.jpg'
import './carosel.css'
import data from '../../components/data';
const Carosel = () => {
  return (
    <div >
      <Carousel>
      {data.map((items)=>(
      <Carousel.Item key={data.index} className='caroselimage'>
        <img src={items.image} />
        <Carousel.Caption>
          <h3>{items.title}</h3>
          <p>{items.price}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    
      
      {/* <Carousel.Item>
        < img src={Image1}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      < img src={Image1}  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  )
}

export default Carosel