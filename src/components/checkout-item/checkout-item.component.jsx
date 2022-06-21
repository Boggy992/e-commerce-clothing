import { useContext } from 'react';

import { CardContext } from '../../contexts/card-dropdown.context';

import {
    CheckoutItemStyled,
    CheckoutItemImage,
    CheckoutItemName,
    CheckoutItemQuantityWrap,
    CheckoutItemRemoveBtn,
    CheckoutRemoveSvgIcon,
    CheckoutItemPrice,
    CheckoutItemQuantityBtn,
    CheckoutItemQuantitySvg
} from'./checkout-item.style'

const CheckoutItem = ( cardItem ) => {
    const { id, name, imageUrl, price, quantity } = cardItem
    const {
        removeItemFromCard,
        icreaseQuantityFromCard,
        decreaseQuantityFromCard
    } = useContext(CardContext)

    const handleItemRemoving = () => removeItemFromCard(cardItem)
    const handleDecreaseQuantity = () => decreaseQuantityFromCard(cardItem)
    const handleIncreaseQuantity = () => icreaseQuantityFromCard(cardItem)

    return (
        <CheckoutItemStyled id={id}>
            <CheckoutItemImage src={ imageUrl } alt={`${ name }`} />
            <CheckoutItemName>{ name }</CheckoutItemName>
            <CheckoutItemQuantityWrap>
                <CheckoutItemQuantityBtn type='button' onClick={ handleDecreaseQuantity }>
                    <CheckoutItemQuantitySvg/>
                </CheckoutItemQuantityBtn>
                <h3>{ quantity }</h3>
                <CheckoutItemQuantityBtn type='button' onClick={ handleIncreaseQuantity }>
                    <CheckoutItemQuantitySvg/>
                </CheckoutItemQuantityBtn>
            </CheckoutItemQuantityWrap>
            <CheckoutItemPrice> { price } $</CheckoutItemPrice>
            <CheckoutItemRemoveBtn type='button' onClick={ handleItemRemoving }>
                <CheckoutRemoveSvgIcon/>
            </CheckoutItemRemoveBtn>
        </CheckoutItemStyled>
    )
}

export default CheckoutItem