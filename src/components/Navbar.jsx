import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const toggleNav = () => {
    const hamburgerToggler = document.querySelector('.hamburger')
    const navLinksContainer = document.querySelector('.navlinks-container')

    hamburgerToggler.classList.toggle('open')
    const ariaToggle =
      hamburgerToggler.getAttribute('aria-expanded') === 'true'
        ? 'false'
        : 'true'
    hamburgerToggler.setAttribute('aria-expanded', ariaToggle)
    navLinksContainer.classList.toggle('open')
  }

  return (
    <nav className='navbar-c'>
      <div className='navlinks-container'>
        <Link
          aria-expanded='false'
          onClick={() => toggleNav()}
          to='/'
          aria-current='page'
        >
          <Icon.Home />
        </Link>
      </div>
      <div className='navlink-c'>
        <Link
          className='hamburger'
          aria-label='Toggle navigation'
          aria-expanded='false'
          onClick={() => toggleNav()}
        >
          <Icon.Menu />
        </Link>

        <Link to='/portfolio'>PORTFOLIO</Link>
        <Link to='/about'>À PROPOS</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </nav>
  )
}

export default Navbar
