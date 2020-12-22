import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header className='header'>
      <h1>MY AWSOME PHOTO BLOG</h1>
      <nav>
        <ul className='header-nav'>
          <li>
            <NavLink className='header-navlink' to='/'>
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink className='header-navlink'  to='/gallerie'>
              Gallerie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
