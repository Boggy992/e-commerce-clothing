import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from '../../contexts/products.context';
import ShopCard from '../shop-card/shop-card.component';

import { ProductTitle, ProductContainer } from './product.style';

const Product = () => {
    // TITLE IZ usePARAMS JE URL( ako se poklapa sa products objektom elemenata, prikazuje se sadrzaj ) npr. /womens
    const { title } = useParams()
    const { products } = useContext(ProductsContext)
    const [ shopProducts, setShopProducts ] = useState(products[title])

    useEffect(() => {
        setShopProducts(products[title])

    }, [ title, products])

    return (
        <>
        {
            Object.keys(products).map(objTitle => (
                objTitle === title ?
                <Fragment key={title}>
                    <ProductTitle>{ title }</ProductTitle>
                    <ProductContainer>
                        {
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
        </>
    )
}

export default Product