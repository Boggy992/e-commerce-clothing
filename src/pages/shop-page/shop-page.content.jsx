import { Route, Routes } from "react-router-dom";

import ShopDirectory from '../../components/shop-directory/shop-directory.component';
import Product from '../../components/product/product.component';

import { ShoppageStyled } from './shop-page.style';
import { Wrap } from '../../layout.style';

const ShopPage = () => {
    return (
        <ShoppageStyled>
            <Wrap>
                <Routes>
                    <Route index element={<ShopDirectory />}></Route>
                    <Route path=":title" element={<Product />}></Route>
                </Routes>
            </Wrap>
        </ShoppageStyled>
    )
}

export default ShopPage;