import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const CardDropdownStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 260px;
    height: 370px;
    padding: 20px;
    background: white;
    border: 2px solid black;
    z-index: 1;
    position: absolute;
    top: ${({ isCardOpen }) => isCardOpen ? '45px' : '60px'};
    right: 0;
    visibility: ${({ isCardOpen }) => isCardOpen ? 'visible' : 'hidden'};
    opacity: ${({ isCardOpen }) => isCardOpen ? 1 : 0};
    transition: 0.3s ease;
`
export const CardItemsStyled = styled.div`
    max-height: 78%;
    overflow: auto;
`
export const CardItemsTitleStyled = styled.h2`
    text-align: center;
`

export const CheckoutLinkStyled = styled(Link)`
    display: block;
    width: 100%;
    font-size: 18px;
    padding: 1rem 0.5rem;
    background: black;
    color: white;
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    transition: 0.3s ease;
    &:hover  {
        background: white;
        color: black;
        border: 1px solid black;
    }
`