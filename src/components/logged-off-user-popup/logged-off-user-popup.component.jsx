import { useContext } from 'react';

import {
    LoggedOffUserStyled,
    LoggedOffUserTitle,
    LoggedOffUserClosedButton,
    LoggedOffUserCloseSvg
} from './logged-off-user-popup-style'
import { UserContext } from '../../contexts/user.context';

const LoggedOffUserPopup = () => {
    const { setToggleUserLogged } = useContext(UserContext)

    const closePopup = () => setToggleUserLogged(true)

    return (
        <LoggedOffUserStyled>
             <LoggedOffUserClosedButton type='button' onClick={ closePopup }>
                <LoggedOffUserCloseSvg/>
            </LoggedOffUserClosedButton>
            <LoggedOffUserTitle>User needs to be logged in to purchase our products</LoggedOffUserTitle>
        </LoggedOffUserStyled>
    )
}

export default LoggedOffUserPopup