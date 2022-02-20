import React from "react";
import { withRouter } from "react-router-dom";

import './shopCard.style.scss';

const ShopCard = ({ imageUrl, name, price }) => (
    <div className='shopCard__wrapper'>
        <div className='shopCard__image-container'>
            <div className='shopCard__image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
        <div className='shopCard__text'>
            <span className='shopCard__title'>{name}</span>
            <span className='shopCard__price'>{`$${price}`}</span>
        </div>
    </div>
)

export default withRouter(ShopCard);