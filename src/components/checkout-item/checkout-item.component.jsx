import { useContext } from 'react';

import { ReactComponent as CheckoutButton } from '../../assets/right-arrow.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';

import { CardContext } from '../../contexts/card-dropdown.context';

import './checkout-item.style.scss'

const CheckoutItem = ( cardItem ) => {
    const { id, name, imageUrl, price, quantity } = cardItem
    const {
        removeItemFromCard,
        icreaseQuantityFromCard,
        decreaseQuantityFromCard
    } = useContext(CardContext)

    const handleItemRemoving = () => removeItemFromCard(id)

    const handleIncreaseQuantity = () => icreaseQuantityFromCard(cardItem)

    const handleDecreaseQuantity = () => decreaseQuantityFromCard(cardItem)

    return (
        <div className='checkout-item' id={id}>
            <img className='checkout-item__image' src={ imageUrl } alt={`${ name }`} />
            <h2 className='checkout-item__name'>{ name }</h2>
            <div className='checkout-item__quantity-wrap'>
                <button className='checkout-item__quantity-button' type='button' onClick={ handleDecreaseQuantity }>
                    <CheckoutButton className='checkout-item__quantity-icon'/>
                </button>
                <h3 className='checkout-item__quantity'>{ quantity }</h3>
                <button className='checkout-item__quantity-button checkout--btn-right' type='button' onClick={ handleIncreaseQuantity }>
                    <CheckoutButton className='checkout-item__quantity-icon'/>
                </button>
            </div>
            <h4 className='checkout-item__price'>{ price } $</h4>
            <button className='checkout-item__remove' type='button' onClick={ handleItemRemoving }>
                <CloseButton className='checkout-item__remove-icon'/>
            </button>
        </div>
    )
}

export default CheckoutItem