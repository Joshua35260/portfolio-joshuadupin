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
    <nav className='nav-c'>
      <div className='main-navlinks'>
        <button
          className='hamburger'
          type='button'
          aria-label='Toggle navigation'
          aria-expanded='false'
          onClick={() => toggleNav()}
        >
          <Icon.Menu />
        </button>
        <div className='navlinks-container'>
          <Link
            aria-expanded='false'
            onClick={() => toggleNav()}
            to='/'
            aria-current='page'
          >
            <Icon.Home size='14' />
          </Link>

          <Link to='/portfolio'>PORTFOLIO</Link>
          <Link to='/about'>À PROPOS</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
