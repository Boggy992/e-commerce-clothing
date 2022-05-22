import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CardContext } from "../../contexts/card-dropdown.context";

import './card-icon.style.scss';
import '../header/header.style.scss';

const CardIcon = () => {
    const { isCardOpen, setIsCardOpen } = useContext(CardContext);

    const openCardOnClick = () => setIsCardOpen(!isCardOpen)

    return (
        <div className='header__option card-icon-container' onClick={ openCardOnClick }>
            <ShoppingIcon className='card-icon'/>
            <span className='card-icon-counter'>10</span>
        </div>
    )
}

export default CardIcon;