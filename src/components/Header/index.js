// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav className="nav-container">
      <div className="wave-container">
        <img
          className="wave-img"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul className="list-container">
        <li>
          <Link className="each" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="each" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="each" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
