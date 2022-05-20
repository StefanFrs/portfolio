import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faUser,faHome} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    return(
      <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon ={faHome} color="#4d4d4d" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about" to="/about">
                <FontAwesomeIcon icon ={faUser} color="#4d4d4d" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4d" />
            </NavLink>
        </nav>
      </div>
    )

} 