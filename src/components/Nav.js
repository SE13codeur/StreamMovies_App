import React from 'react'
import '../styles/Nav.scss'

import logo from '../assets/images/logo.jpg'
import avatar from '../assets/images/avatar.svg'

const Nav = () => {
    return (
        <div className='nav nav--black'>
            <button className='nav__toggle'>

            </button>

            <img src={logo} alt='logo' className='logo' />

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
                    Search
                </a>
                <a href='/' className='nav__action'>
                    Live
                </a>
                <a href='/' className='nav__action'>
                    Notif
                </a>
                <a href='/' className='nav__action'>
                    <img src={avatar} alt='avatar'/>
                </a>
            </div>
            
            
        </div>
    )
}

export default Nav
