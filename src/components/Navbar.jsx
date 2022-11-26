import * as Icon from 'react-feather'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import iconHome from '../assets/img/svg/home.svg'

const Navbar = () => {
  const [scroll, setScroll] = useState('relative')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY < 100)
    })
  }, [])

  return (
    <nav className={scroll ? 'nav-c' : 'nav-c sticky'}>
      <div
        className={scroll ? 'navlinks-container' : 'navlinks-container sticky'}
      >
        <Link to='home' spy={true} smooth={true} activeClass='active'>
          <img src={iconHome} alt="lien accueil" className='icon-home'/>
        </Link>
        <Link to='skills' spy={true} smooth={true} activeClass='active'>
          COMPÉTENCES
        </Link>
        <Link to='portfolio' spy={true} smooth={true} activeClass='active'>
          PORTFOLIO
        </Link>
        <Link to='about' spy={true} smooth={true} activeClass='active'>
          À PROPOS
        </Link>
        <Link to='contact' spy={true} smooth={true} activeClass='active'>
          CONTACT
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
