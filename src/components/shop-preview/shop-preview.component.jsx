import { Link } from 'react-router-dom';

import ShopCard from '../shop-card/shop-card.component';

import './shop-preview.style.scss'

const ShopPreview = ({ title, products }) => {
    return (
        <div>
            <Link className="shop-page__link" to={`${title}`}>{ title }</Link>
            <div className="shop-card__container">
                {
                    // _underscore prestavlja promenljivu koja se ne upotrebljava
                    products[title].filter((_, index) => index < 4).map((product) => 
                        <ShopCard key={product.id} {...product}/> 
                    )
                }
            </div>
        </div>
    )
}

export default ShopPreview