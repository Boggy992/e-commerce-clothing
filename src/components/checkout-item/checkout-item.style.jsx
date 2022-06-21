import styled from 'styled-components';
import { ReactComponent as CloseButton } from '../../assets/close.svg';
import { ReactComponent as CheckoutButton } from '../../assets/right-arrow.svg';

export const CheckoutItemStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-bottom: 2px solid #e3e3e3;
`

export const CheckoutItemImage = styled.img`
    width: 100%;
    flex: 1 1 20%;
    max-width: 20%;
    min-width: 172px;
    margin-right: 22px;
`

export const CheckoutItemName = styled.h2`
    flex: 1 1 20%;
    max-width: 20%;
`

export const CheckoutItemQuantityWrap = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 20%;
    max-width: 20%;
`

export const CheckoutItemRemoveBtn = styled.button`
    text-align: start;
    cursor: pointer;
    padding-left: 30px;
    flex: 1 1 23%;
    max-width: 23%;
`

export const CheckoutRemoveSvgIcon = styled(CloseButton)`
    width: 16px;
`

export const CheckoutItemPrice = styled.h4`
    font-size: 20px;
    flex: 1 1 23%;
    max-width: 23%;
`

export const CheckoutItemQuantityBtn = styled.button`
    cursor: pointer;
    &:nth-of-type(1) {
        svg {
            transform: rotate(180deg);
        }
    }
`

export const CheckoutItemQuantitySvg = styled(CheckoutButton)`
    width: 16px;
`