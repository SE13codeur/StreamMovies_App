import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

const Footer = () => {



    return (
        <div className='footer'>
            
            <div className='container'>
                <div className='footer__socials'>
                    <a href='/' className='footer__link'>
                        <FacebookIcon />
                    </a>
                    <a href='/' className='footer__link'>
                        <InstagramIcon />
                    </a>
                    <a href='/' className='footer__link'>
                        <TwitterIcon />
                    </a>
                    <a href='/' className='footer__link'>
                        <YouTubeIcon />
                    </a>
                </div>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li> <li className='footer__link'>
                        <a href='/'>
                            Lien footer
                        </a>
                    </li>
                </ul>
                <div className='footer__copy'>SRK ©2021 by SEB CODEUR</div>


            </div>
            
        </div>
    )
}

export default Footer
