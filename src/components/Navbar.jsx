import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
const Navbar = () => {
  return (
    <header>
      <div className='navbar-c'>
        <div className='firstNav'>
          <NavLink
            to='/home'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div></div>
          </NavLink>
          <NavLink
            to='/femme'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>FEMME</div>
          </NavLink>
          <NavLink
            to='/enfant'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>ENFANT</div>
          </NavLink>
          <NavLink
            to='/brand'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>MARQUES</div>
          </NavLink>
        </div>
        <div className='thirdNav'>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>
              <Icon.User size={28} />
            </div>
          </NavLink>
          <NavLink
            to='/fav'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>
              <Icon.Heart size={28} />
            </div>
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <div>
              <Icon.ShoppingCart size={28} />
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
