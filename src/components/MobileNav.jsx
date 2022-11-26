import { useState } from 'react'
import { Link } from 'react-scroll'
import { ChevronUp, Menu } from 'react-feather';
import { motion } from 'framer-motion'

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className='nav-mobile'>

      <div className='nav-mobile-c'>
        
        <div className='arrow-up-c'>
          <span className='arrow-up'>
            <Link to='home' spy={true} smooth={true}>
              <ChevronUp color='white' size='26' />
            </Link>
          </span>
        </div>

        <div className='burger-c'>
          <span className='burger' onClick={handleToggle}>
            <Menu color='white' size='24' />
          </span>
        </div>
      </div>

      <div className={navbarOpen ? 'burger-menu' : 'hidden'}>
        <ul>
          <li>
            <Link to='skills' spy={true} smooth={true}>
              Compétences
            </Link>
          </li>
          <li>
            <Link to='portfolio' spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='about' spy={true} smooth={true}>
              À propos
            </Link>
          </li>
          <li>
            <Link to='contact' spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
