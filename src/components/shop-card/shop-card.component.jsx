import { useContext } from 'react';

import { CardContext } from '../../contexts/card-dropdown.context';

import CustomButton from '../custom-button/custom-button.component';

import './shop-card.style.scss';

const ShopCard = ({ id, imageUrl, name, price }) => {
    const { addItemToCard } = useContext(CardContext)

    const handleItemsToCard = () => {
        const extendedShopCard = {
            id,
            imageUrl,
            name,
            price,
            quantity: 1
        }
        addItemToCard(extendedShopCard)
    }

    return (
        <div className='shop-card__wrapper'>
            <div className='shop-card__image-container'>
                <div className='shop-card__image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <CustomButton isCardButton onClick={ handleItemsToCard }>Add to card</CustomButton>
            </div>
            <div className='shop-card__text'>
                <span className='shop-card__title'>{name}</span>
                <span className='shop-card__price'>{`$${price}`}</span>
            </div>
        </div>
    )
}

export default ShopCard;