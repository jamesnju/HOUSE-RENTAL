import './Footer.css'
import Github from "@iconscout/react-unicons/icons/uil-github"
import House from "@iconscout/react-unicons/icons/uil-house-user"

import Instagram from "@iconscout/react-unicons/icons/uil-instagram"

const Footer = () => {
  return (
    <footer>
        <div className="left">
            <h4>social media</h4>

            <Github/>
            <Instagram/>
            <House/>
        </div>
        <div className="center">
            <h4>usefull links</h4>
            <p>Home</p>
            <p>About</p>
        </div>
        <div className="right">
            <h4>Location</h4>
            <p>Nairobi</p>
        </div>
        <p className='copy'>All Rights Reserved &copy;2024</p>
    </footer>
  )
}

export default Footer