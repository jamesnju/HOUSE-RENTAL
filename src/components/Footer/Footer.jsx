import './Footer.css'
import Github from "@iconscout/react-unicons/icons/uil-github"
import House from "@iconscout/react-unicons/icons/uil-house-user"

import Instagram from "@iconscout/react-unicons/icons/uil-instagram"

const Footer = () => {
  return (
    <footer>
        <div className="left">
            <h2>social media</h2>

            <Github/>
            <Instagram/>
            <House/>
        </div>
        <div className="center">
            <h2>usefull links</h2>
            <p>Home</p>
            <p>About</p>
        </div>
        <div className="right">
            <h2>Location</h2>
            <p>Nairobi</p>
        </div>
    </footer>
  )
}

export default Footer