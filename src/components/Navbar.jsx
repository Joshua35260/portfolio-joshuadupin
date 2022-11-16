import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

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
    <nav className={scroll ? "nav-c" : "nav-c sticky"}>
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
          <Icon.Home size='20' />
        </Link>
        <Link to='/skills'>Compétences</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/about'>À propos</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
