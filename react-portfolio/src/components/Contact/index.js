import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rsdkpw3', 'template_vc6fwcu', form.current, 'CgfPfwAJE60fABDHq')
        .then((result) => {
            alert('Message successfully sent!')
            console.log(result.text);
        }, (error) => {
            alert('Failed to send the message, please try again or contact me on social media links!:)')
            console.log(error.text);
        });
    };

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    },[])

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','c','t','a','t',' ','m','e']}
                        idx={15}
                        letterClass={letterClass}
                        />
                    </h1>
                  <div className='contact-form'>
                      <form ref={form} onSubmit={sendEmail}>
                          <ul>
                              <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                              </li>
                              <li className='half'>
                                <input type="email" name="email" placeholder="Email" required/>
                              </li>
                              <li >
                                <input type="text" name="subject" placeholder="Subject" required/>
                              </li>
                              <li>
                                  <textarea placeholder='Message' name='message' required></textarea>
                              </li>
                              <li>
                                  <input type="submit" className="flat-button" value="SEND"></input>
                              </li>
                          </ul>
                      </form>
                  </div>
                </div>
            </div>
        </>
    )
}