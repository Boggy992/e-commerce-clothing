import React from "react";

import ShopDirectory from '../../components/shop-directory/shop-directory.component'

import '../../layout.style.scss';

const ShopPage = () => (
    <div className='shop-page'>
        <div className='wrap'>
            <ShopDirectory />
        </div>
    </div>
)

export default ShopPage;