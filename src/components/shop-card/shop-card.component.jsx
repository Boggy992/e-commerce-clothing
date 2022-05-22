import React from "react";

import CustomButton from '../custom-button/custom-button.component';

import './shop-card.style.scss';

const ShopCard = ({ imageUrl, name, price }) => (
    <div className='shop-card__wrapper'>
        <div className='shop-card__image-container'>
            <div className='shop-card__image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <CustomButton isCardButton>Add to card</CustomButton>
        </div>
        <div className='shop-card__text'>
            <span className='shop-card__title'>{name}</span>
            <span className='shop-card__price'>{`$${price}`}</span>
        </div>
    </div>
)

export default ShopCard;