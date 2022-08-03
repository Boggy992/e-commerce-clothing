import React, { useContext, useEffect } from "react";

import { ProductsContext } from '../../contexts/products.context';
import { UserContext } from '../../contexts/user.context';
import LoggedOffUserPopup from '../logged-off-user-popup/logged-off-user-popup.component';
import ShopPreview from '../../components/shop-preview/shop-preview.component';

const ShopDirectory = () => {
    const { products } = useContext(ProductsContext);
    const { currentUser, toggleUserLogged, setToggleUserLogged } = useContext(UserContext)

    useEffect(() => {
        setToggleUserLogged(true)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                // Object.keys KREIRA NIZ OD KLJUCEVA (NEBROJIVIH KAO STO JE TITLE) [ hats, jackets, mens, sneakers, womens ]
                Object.keys(products).map( (title) => (
                    <ShopPreview key={title} title={title} products={products}/>
                ))
            }
            {
                !currentUser && !toggleUserLogged && <LoggedOffUserPopup />
            }
        </>
    )
}

export default ShopDirectory;