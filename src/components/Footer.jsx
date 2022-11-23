import React from 'react'
import * as Icon from 'react-feather'
import CV from '../assets/CV.pdf'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='foot'>
        <div className='contact-bar2'>
      <div className='cbar-c'>
        <div className='cbar-link'>
          <Link to='https://www.linkedin.com/in/joshua-dupin/'><Icon.Linkedin size='16' /></Link>
          <Link to='https://github.com/Joshua35260'><Icon.GitHub size='16' /></Link>
          <Link to='https://www.instagram.com/sunji_josh/?hl=fr'><Icon.Instagram size='16' /></Link>
          <Link to='https://www.facebook.com/SunjiDJosh'><Icon.Facebook size='16' /></Link>
        </div>
     
        <div className='foot-credits'><span>©</span>joshuadupin.me</div>
       
        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
      </div>
    </div>
      <div className='foot-in'>

        <div className='foot-left'>
          <div className='foot-desc'>
            <h1>Développeur Web Fullstack</h1>
            <p className='foot-desc-p'>
            Je suis passioné par le code avec une tendance à m'orienter vers le Front-End.
            Actuellement en stage, je suis à la recherche d'un poste en CDI ou
            bien une alternance afin de préparer le titre "Concepteur
            Développeur".
            </p>
          </div>
        </div>

        <div className='foot-right'>
          <h2>Joshua Dupin</h2>
          <ul>
            <li>
              <Icon.MapPin className='icon-space' size='14' />
              35260 CANCALE
            </li>
            <li>
              <a href='mailto:joshua35260@gmail.com'>
                <Icon.Mail size='14' className='icon-space' />
                joshua35260@gmail.com
              </a>
            </li>
            <li>
              <a href='/'>
                <Icon.Link size='14' className='icon-space' />
                joshuadupin.me
              </a>
            </li>
          </ul>
        </div>

      </div>

    
    </footer>
  )
}

export default Footer
