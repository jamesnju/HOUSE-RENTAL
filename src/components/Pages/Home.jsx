import React from 'react'
import './Home.css';
import Image1 from '../assets/1.jpg'
import data from '../data'
import Sidebar from '../Sidebar/Sidebar';
import Map from '../Sidebar/Map';
const Home = () => {
  return (
    <div className='main'>
        <div className="content">
            <h1>Our Properties</h1>
            {data.map((datas) => (
                <div key={datas.index} className="hao">
                <div className="img">
                <img src={datas.image} alt="" />
                </div>
                <div className="info">
                <p>{datas.title}</p>
                <p>{datas.price}</p>
                <p>{datas.Location}</p>
                </div>
                <button>BOOK</button>
                </div>
            ))}
        </div>
        <div className="sidebar">
            <h3>Vaccant</h3>
            <Sidebar/>
            <Map/>
        </div>
    </div>
  )
}

export default Home