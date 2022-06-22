import ShopCard from '../shop-card/shop-card.component';

import {
    ShopCardLink,
    ShopCardContainer
} from './shop-preview.style'

const ShopPreview = ({ title, products }) => {
    return (
        <div>
            <ShopCardLink to={`${title}`}>{ title }</ShopCardLink>
            <ShopCardContainer>
                {
                    // _underscore prestavlja promenljivu koja se ne upotrebljava
                    products[title].filter((_, index) => index < 4).map((product) =>
                        <ShopCard key={product.id} {...product}/>
                    )
                }
            </ShopCardContainer>
        </div>
    )
}

export default ShopPreview