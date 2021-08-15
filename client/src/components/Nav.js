import { useState } from 'react'
import '../styles/Nav.scss'

import logo from '../assets/images/logo.jpg'
import avatar from '../assets/images/avatar.svg'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Nav = () => {

    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }

    useState(() => {
        document.addEventListener('scroll', transitionNav)
    })

    const handleClickToggle = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }

    return (
        <div className={`nav ${navBlack || toggleMenu ? 'nav--black' : 'nav__transparent'} ${toggleMenu && 'show'}`}>
            <button className='nav__toggle' onClick={handleClickToggle}>
                <MenuIcon />
            </button>

            <img src={logo} alt='logo' className='nav__logo' />

            <nav className='nav__links'>
                <a href='/' className='nav__link'>
                    Welcome
                </a>
                <a href='/' className='nav__link'>
                    Series
                </a>
                <a href='/' className='nav__link'>
                    Films
                </a>
            </nav>

            <div className='nav__actions'>
                <a href='/' className='nav__action'>
                    <SearchIcon />
                </a>
                <a href='/' className='nav__action'>
                    Live
                </a>
                <a href='/' className='nav__action'>
                    <NotificationsIcon />
                </a>
                <a href='/' className='nav__action'>
                    <img src={avatar} alt='avatar' className='nav__avatar'/>
                </a>
            </div>
            
            
        </div>
    )
}

export default Nav