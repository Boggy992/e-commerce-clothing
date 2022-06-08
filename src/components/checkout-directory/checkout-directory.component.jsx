import { useContext } from 'react';
import { CardContext } from '../../contexts/card-dropdown.context';

import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout-directory.style.scss';
const titles = [
    'Product',
    'Description',
    'Quantity',
    'Price',
    'Remove',
]
const CheckoutDirectory = () => {
    const { cardItems, totalPrice } = useContext(CardContext)

    return (
        <div className='checkout-directory'>
            <div className='checkout-directory__titles'>
                { titles.map(title => <h3>{ title }</h3> )}
            </div>
            <div className='checkout-directory__items'>
                {
                    !cardItems.length
                    ? <h1 className='checkout-directory__title'>There is no items in shoping card.</h1>
                    : cardItems.map((cardItem) =>
                        <CheckoutItem key={cardItem.id} {...cardItem}/>
                    )
                }
            </div>
            {
                totalPrice
                ? <h2 className='checkout-directory__total-price'>TOTAL: ${ totalPrice }</h2>
                : null
            }
        </div>
    )
}

export default CheckoutDirectory