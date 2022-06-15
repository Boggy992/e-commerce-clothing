import React from "react";
import { Link } from "react-router-dom";

import './card.style.scss'

const Card = ({ title, imageUrl, size }) => (
    <Link className={`homepage__${size} homepage__card`} to={`shop/${title}`}>
        <div className='homepage__image-wrapper' style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className='homepage__wrap'>
                <h1 className='homepage__title'>{title}</h1>
                <span className='homapage__subtitle'>shop now</span>
            </div>
        </div>
    </Link>
)

export default Card;