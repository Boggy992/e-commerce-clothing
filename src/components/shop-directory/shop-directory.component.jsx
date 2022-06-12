import React, { useContext, Fragment } from "react";

import ShopCard from '../shop-card/shop-card.component';
import { ProductsContext } from '../../contexts/products.context';

import './shop-directory.style.scss';
import { Link } from "react-router-dom";

const ShopDirectory = () => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            {
                // Object.keys KREIRA NIZ OD KLJUCEVA (NEBROJIVIH KAO STO JE TITLE) [ hats, jackets, mens, sneakers, womens ]
                Object.keys(products).map((title) =>
                    <Fragment key={title}>
                        <Link className="shop-page__link" to={`/shop/${title}`}>{title}</Link>
                        <div className='shop-card__container'>
                            {
                                // products iako je objekat pomocu [title] nalazi koji je key-title u pitanju i mapira kroz sve elemente u npr. products[jackets] nizu
                                products[title].filter((item, index) =>  index < 4).map(({ id, ...rest }) => (
                                    <ShopCard key={id} id={id} {...rest} />
                                ))
                            }
                        </div>
                    </Fragment>
                )
            }
        </>
    )
}

export default ShopDirectory;