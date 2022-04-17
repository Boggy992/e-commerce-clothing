import React from "react";

import SHOP_DATA from './shop_data';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './shop-directory.style.scss';

class ShopDirectory extends React.Component {
    constructor() {
        super()

        this.state = {
          SHOP_DATA 
        } 
    }

    render() {
        const data = [...this.state.SHOP_DATA];

        return (
            <div className='shop-card__container'>
                {
                    data.map(({ id, title, items }) => (
                        <CollectionPreview key={id} title={title} items={items}/>       
                    ))
                }
            </div>
        )
    }
}

export default ShopDirectory;