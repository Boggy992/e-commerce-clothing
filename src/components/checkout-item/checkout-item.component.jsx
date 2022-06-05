import { useContext } from 'react';

import { ReactComponent as CheckoutButton } from '../../assets/right-arrow.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';

import { CardContext } from '../../contexts/card-dropdown.context';

import './checkout-item.style.scss'

const CheckoutItem = ({ id, name, imageUrl, price, quantity }) => {
    const { removeItemFromCard } = useContext(CardContext)

    const handleItemRemoving = () => removeItemFromCard(id)

    return (
        <div className='checkout-item' id={id}>
            <img className='checkout-item__image' src={ imageUrl } alt={`${ name }`} />
            <h2 className='checkout-item__name'>{ name }</h2>
            <div className='checkout-item__quantity-wrap'>
                <button className='checkout-item__quantity-button' type='button'>
                    <CheckoutButton className='checkout-item__quantity-icon'/>
                </button>
                <h3 className='checkout-item__quantity'>{ quantity }</h3>
                <button className='checkout-item__quantity-button checkout--btn-right' type='button'>
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