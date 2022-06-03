import React, { useContext } from "react";

import ShopCard from '../shop-card/shop-card.component';
import { ProductsContext } from '../../contexts/products.context';

import './shop-directory.style.scss';

const ShopDirectory = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='shop-card__container'>
            {
                products.map(({ id, ...rest }) => (
                    <ShopCard key={id} id={id} {...rest} />
                ))
            }
        </div>
    )
}

export default ShopDirectory;