import React from "react";

import './card.style.scss'

const Card = ({ title, imageUrl, size}) => (
    <div className={`homepage__${size} homepage__card`}>
        <div className='homepage__image-wrapper' style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className='homepage__wrap'>
                <h1 className='homepage__title'>{title}</h1>
                <span className='homapage__subtitle'>shop now</span>
            </div>
        </div>
    </div>
)

export default Card;