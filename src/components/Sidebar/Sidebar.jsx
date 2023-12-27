import Carousel from 'react-bootstrap/Carousel';
import './sidebar.css'
import data from '../data'
const Sidebar = () => {
  return (
    <div className='sidemain'>
        <div className="sub">
        <p>House For Rent</p>
            <p>Furnished Apartment</p>
            <p>Houses For Sale</p>
        </div>
        <div className="cards">
        <Carousel data-bs-theme="dark">
          {data.map((sideItems)=>(

          
      <Carousel.Item key={data.index} className='mt-10rem'>

        <img
          className="d-block w-100"
          src={sideItems.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{sideItems.title}</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
        </div>

    </div>
  )
}

export default Sidebar