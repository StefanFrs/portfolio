import AnimatedLetters from '../AnimatedLetters'
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faHubspot, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import fileSaver from 'file-saver'
import MyPDF from '../About/Ferastauaru_StefanCV.pdf'
import './index.scss'

export default function About(){

    const saveFile = () => {
        fileSaver.saveAs(
          process.env.REACT_APP_CLIENT_URL + "/Ferastauaru_StefanCV.pdf",
          "Ferastauaru_StefanCV.pdf"
        );
    };

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    },[])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Hardworking and ambitious person with a great passion for front-end development. I am able to work well both, in a team environment as well as using own initiative.
                I'm always looking to improve myself.
                </p>
                <p>
                   Hobbies: Trail running, Handball, Basketball, Guitar.
                </p>
                <p>
                “A user interface is like a joke. If you have to explain it, it's not that good”. — Martin Leblanc
                </p>
                <div className='two-buttons'>
                   <a className='about-button' href={MyPDF} download="Ferastauaru_StefanCV.pdf">Check CV</a>
                   <a href='https://github.com/StefanFrs' target="_blank" rel='noreferrer' className='about-button'>Check the projects</a>
                </div>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHubspot} color="#FA7820"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
}