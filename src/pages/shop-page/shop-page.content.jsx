import { Route, Routes } from "react-router-dom";

import ShopDirectory from '../../components/shop-directory/shop-directory.component';
import Product from '../../components/product/product.component';

import '../../layout.style.scss';

const ShopPage = () => {
    return (
        <div className='shop-page'>
            <div className='wrap'>
                <Routes>
                    <Route index element={<ShopDirectory />}></Route>
                    <Route path=":title" element={<Product />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default ShopPage;