import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <div className="nav-section">
      <img
        src="https://myproject.fr/images/myproject/landing/my-project-landing.png"
        alt="logo"
        className="logo"
      />
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
