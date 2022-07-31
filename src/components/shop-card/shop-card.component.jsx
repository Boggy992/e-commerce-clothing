import { useContext } from 'react';

import { CardContext } from '../../contexts/card-dropdown.context';
import { UserContext } from '../../contexts/user.context';
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
    const { currentUser, setToggleUserLogged } = useContext(UserContext)

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

    const handleLogedInUser = () => {
        if(!currentUser) {
            setToggleUserLogged(false)
            return
        }

        setToggleUserLogged(true)
        handleItemsToCard()
    }

    return (
            <ShopCardWrapper>
                <ShopCardImageContainer>
                    <ShopCardImage imageUrl={imageUrl}></ShopCardImage>
                    <CustomButton isCardButton onClick={ handleLogedInUser }>Add to card</CustomButton>
                </ShopCardImageContainer>
                <ShopCardText>
                    <ShopCardTitle>{name}</ShopCardTitle>
                    <ShopCardPrice>{`$${price}`}</ShopCardPrice>
                </ShopCardText>
            </ShopCardWrapper>
    )
}

export default ShopCard;