import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const Header = ({currentUser}) => {
    return(
        <Fragment>
            <div className='header'>
                <div className='wrap'>
                    <div className="header__container">
                        <Link className='header__logo-container' to='/'>
                            <Logo className='header__logo'/>
                        </Link>
                        <div className='header__options'>
                            <Link className='header__option' to='/shop'>shop</Link>
                            <Link className='header__option' to='/contact'>contact</Link>
                            {
                                currentUser ?
                                <div className='header__option' onClick={() => auth.signOut()}>SIGN OUT</div>
                                :
                                <Link className='header__option' to='signin'>SIGN IN</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Header;