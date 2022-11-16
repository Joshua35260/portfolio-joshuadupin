import * as Icon from 'react-feather'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'active activeborder' : 'inactive'
          }
        >
          <Icon.Home size='15' className='homeIcon' />
        </NavLink>
        <NavLink
          to='/skills='
          className={({ isActive }) =>
            isActive ? 'active activeborder' : 'inactive'
          }
        >
          COMPÉTENCES
        </NavLink>
        <NavLink
          to='/portfolio'
          className={({ isActive }) =>
            isActive ? 'active activeborder' : 'inactive'
          }
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'active activeborder' : 'inactive'
          }
        >
          À PROPOS
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'active activeborder' : 'inactive'
          }
        >
          CONTACT
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
