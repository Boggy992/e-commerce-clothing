import React from "react";

import ShopCard from '../shop-card/shop-card.component';

import './collection-preview.style.scss';

const CollectionPreview = ({ id, ...rest }) => (
    <div className='collection-preview'>
        <div className='collection-preview__wrap'>
            <ShopCard key={id} {...rest} />
        </div>
    </div>
);

// export default CollectionPreview;