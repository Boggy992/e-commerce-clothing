import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CardContext } from "../../contexts/card-dropdown.context";

import { HeaderOption } from '../header/header.style';
import './card-icon.style.scss';

const CardIcon = () => {
    const { isCardOpen, setIsCardOpen, cardCount } = useContext(CardContext);

    const openCardOnClick = () => setIsCardOpen(!isCardOpen)

    return (
        <HeaderOption as="div" className='card-icon-container' onClick={ openCardOnClick }>
            <ShoppingIcon className='card-icon'/>
            <span className='card-icon-counter'>{ cardCount }</span>
        </HeaderOption>
    )
}

export default CardIcon;