import React, { useContext } from "react";
import { CardContext } from "../../contexts/card-dropdown.context";

import { HeaderOption } from '../header/header.style';
import { CardIconStyled, CardIconCounter } from './card-icon.style';

const CardIcon = () => {
    const { isCardOpen, setIsCardOpen, cardCount } = useContext(CardContext);

    const openCardOnClick = () => setIsCardOpen(!isCardOpen)

    return (
        <HeaderOption as="div" onClick={ openCardOnClick } isPositionRelative>
            <CardIconStyled />
            <CardIconCounter>{ cardCount }</CardIconCounter>
        </HeaderOption>
    )
}

export default CardIcon;