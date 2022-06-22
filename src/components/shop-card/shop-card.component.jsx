import { useContext } from 'react';

import { CardContext } from '../../contexts/card-dropdown.context';

import CustomButton from '../custom-button/custom-button.component';

import {
    ShopCardImage,
    ShopCardWrapper,
    ShopCardImageContainer,
    ShopCardText,
    ShopCardTitle,
    ShopCardPrice
} from './shop-card.style';

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
        <ShopCardWrapper>
            <ShopCardImageContainer>
                <ShopCardImage imageUrl={imageUrl}></ShopCardImage>
                <CustomButton isCardButton onClick={ handleItemsToCard }>Add to card</CustomButton>
            </ShopCardImageContainer>
            <ShopCardText>
                <ShopCardTitle>{name}</ShopCardTitle>
                <ShopCardPrice>{`$${price}`}</ShopCardPrice>
            </ShopCardText>
        </ShopCardWrapper>
    )
}

export default ShopCard;