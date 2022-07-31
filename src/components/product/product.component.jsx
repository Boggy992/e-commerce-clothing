import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from '../../contexts/products.context';
import { UserContext } from '../../contexts/user.context';
import ShopCard from '../shop-card/shop-card.component';
import LoggedOffUserPopup from '../logged-off-user-popup/logged-off-user-popup.component';

import { ProductTitle, ProductContainer } from './product.style';

const Product = () => {
    // TITLE IZ usePARAMS JE URL( ako se poklapa sa products objektom elemenata, prikazuje se sadrzaj ) npr. /womens
    const { title } = useParams()
    const { products } = useContext(ProductsContext)
    const [ shopProducts, setShopProducts ] = useState(products[title])
    const { currentUser, toggleUserLogged, setToggleUserLogged } = useContext(UserContext)
    
    useEffect(() => {
        setShopProducts(products[title])
    }, [ title, products])

    useEffect(() => {
        setToggleUserLogged(true)
        // eslint-disable-next-line
    }, [ products ])

    return (
        <>
        {
            Object.keys(products).map(objTitle => (
                objTitle === title ?
                <Fragment key={title}>
                    <ProductTitle>{ title }</ProductTitle>
                    <ProductContainer>
                        {
                            // prvi put je vrednost undefined samo ako postoji vrednost shopProducts renderuj ShopCards
                            shopProducts &&
                            shopProducts.map((shopProduct) => (
                                <ShopCard key={shopProduct.id} {...shopProduct}/>)
                            )
                        }
                    </ProductContainer>
                </Fragment>
                : null
            ))
        }
        {
            !currentUser && !toggleUserLogged ? <LoggedOffUserPopup /> : null
        }
        </>
    )
}

export default Product