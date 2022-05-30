import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
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
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/ionut-stefan-ferastauaru-1b5a491a0/">
                    <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4d"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/StefanFrs">
                    <FontAwesomeIcon icon ={faGithub} color="#4d4d4d"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/stefan.frs/?hl=en">
                    <FontAwesomeIcon icon ={faInstagram} color="#4d4d4d"/>
                </a>
            </li>
        </ul>
      </div>
    )

} 