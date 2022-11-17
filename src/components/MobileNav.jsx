import { useState } from 'react'
import { Link } from 'react-scroll'
import * as Icon from 'react-feather'

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className='nav-mobile'>
      <div className='arrow-up-c'>
        <Link to='home' spy={true} smooth={true}>
          <span className='arrow-up'>
            <Icon.ChevronUp color='white' size='32' />
          </span>
        </Link>
      </div>

      <div className='burger-c'>
        <span className='burger' onClick={handleToggle}>
          <Icon.Menu color='white' size='30' />
        </span>
      </div>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <Link to='home' spy={true} smooth={true}>
          <Icon.Home color='white' size='32' />
        </Link>
        <Link to='portfolio' spy={true} smooth={true}>
          Portfolio
        </Link>
        <Link to='skills' spy={true} smooth={true}>
          Compétences
        </Link>
        <Link to='about' spy={true} smooth={true}>
          À propos
        </Link>
        <Link to='contact' spy={true} smooth={true}>
          Contact
        </Link>
      </ul>
    </nav>
  )
}

export default MobileNav
