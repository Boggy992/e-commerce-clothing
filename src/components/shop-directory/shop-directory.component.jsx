import React, { useContext } from "react";

import { ProductsContext } from '../../contexts/products.context';
import ShopPreview from '../../components/shop-preview/shop-preview.component';

const ShopDirectory = () => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            {
                // Object.keys KREIRA NIZ OD KLJUCEVA (NEBROJIVIH KAO STO JE TITLE) [ hats, jackets, mens, sneakers, womens ]
                Object.keys(products).map( (title) => (
                    <ShopPreview key={title} title={title} products={products}/>
                ))
            }
        </>
    )
}

export default ShopDirectory;