import React, { useContext, Fragment } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../firebase/firebase.utils';
import CardDropdown from '../card-dropdown/card-dropdown.component';
import CardIcon from '../card-icon/card-icon.component';
import {
    HeaderContainer,
    HeaderWraper,
    LogoContainer,
    HeaderOptions,
    HeaderOption
} from './header.style';
import { Wrap } from '../../layout.style';

const Header = () => {
    const { currentUser } = useContext(UserContext);

    return(
        <Fragment>
            <HeaderContainer>
                <Wrap>
                    <HeaderWraper>
                        <LogoContainer to='/'>
                            <Logo/>
                        </LogoContainer>
                        <HeaderOptions>
                            <HeaderOption to='/shop'>shop</HeaderOption>
                            <HeaderOption to='/contact'>contact</HeaderOption>
                            {
                                currentUser ?
                                <div onClick={ signOutUser }>SIGN OUT</div> :
                                <HeaderOption to='signin'>SIGN IN</HeaderOption>
                            }
                            <CardIcon />
                            <CardDropdown />
                        </HeaderOptions>
                    </HeaderWraper>
                </Wrap>
            </HeaderContainer>
            <Outlet />
        </Fragment>
    )
};

export default Header;