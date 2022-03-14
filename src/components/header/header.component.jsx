import React from "react";
import { Link } from "react-router-dom"; 

import { ReactComponent as Logo } from '../../assets/crown.svg'; 

import './header.style.scss';

const Header = () => {
    return(
        <div className='header'>
            <div className='wrap'>
                <div className="header__container">
                    <Link className='header__logo-container' to='/'>
                        <Logo className='header__logo'/>
                    </Link>
                    <div className='header__options'>
                        <Link className='header__option' to='/shop'>shop</Link>
                        <Link className='header__option' to='/contact'>contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;