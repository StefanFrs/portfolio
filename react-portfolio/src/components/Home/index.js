import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './index.scss';
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters';

export default function Home(){

    const [letterClass,setLetterClass] = useState('text-animate')
    const hello = ['H','i',',',' ','I',' ','a','m',' ']
    const nameArray = ['t','e','f','a','n']
    const jobArray = ['F','r','o','n','t','e','n','d',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
          setLetterClass('text-animate-hover')
      },[])
    

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1><AnimatedLetters letterClass={letterClass} strArray={hello} idx={1}/>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={10}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16}/>
                </h1>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}