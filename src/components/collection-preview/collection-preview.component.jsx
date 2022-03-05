import React from "react";

import ShopCard from '../shopCard/shopCard.component';

import './collection-preview.style.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h2 className='collection-preview__title'>{title.toUpperCase()}</h2>
        <div className='collection-preview__wrap'>
            {
                items.filter((item, index) => index < 4).map(({id, ...rest}) => (
                    <ShopCard key={id} {...rest} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;