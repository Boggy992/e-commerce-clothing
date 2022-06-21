import { useContext } from 'react';
import { CardContext } from '../../contexts/card-dropdown.context';

import CheckoutItem from '../checkout-item/checkout-item.component';
import {
    CheckoutDirectoryStyled,
    CheckoutDirectoryTitles,
    CheckoutDirectoryTitle,
    CheckoutDirectoryTotalPrice
} from './checkout-directory.style';
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
        <CheckoutDirectoryStyled>
            <CheckoutDirectoryTitles>
                { titles.map((title, index) => <h3 key={index}>{ title }</h3> )}
            </CheckoutDirectoryTitles>
            <div>
                {
                    !cardItems.length
                    ? <CheckoutDirectoryTitle>There is no items in shoping card.</CheckoutDirectoryTitle>
                    : cardItems.map((cardItem) =>
                        <CheckoutItem key={cardItem.id} {...cardItem}/>
                    )
                }
            </div>
            {
                totalPrice
                ? <CheckoutDirectoryTotalPrice>TOTAL: ${ totalPrice }</CheckoutDirectoryTotalPrice>
                : null
            }
        </CheckoutDirectoryStyled>
    )
}

export default CheckoutDirectory