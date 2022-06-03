import { useContext } from 'react';
import { CardContext } from '../../contexts/card-dropdown.context';

import CustomButton from '../custom-button/custom-button.component';
import CardItem from '../../components/card-item/card-item.component';

import './card-dropdown.style.scss';

const CardDropdown = () => {
    const { isCardOpen, cardItems } = useContext(CardContext);

    return (
        <div className={`${isCardOpen ? 'card-dropdown--active' : ''} card-dropdown`}>
            <div className='card-items'>
                {
                    !cardItems.length ? <h2 className='card-items__title'>Your card is empty</h2> :
                    cardItems.map(( { id, ...rest } ) => {
                        return <CardItem key={id} {...rest}/>
                    })
                }
            </div>
            <CustomButton isShopButton>Go to checkout</CustomButton>
        </div>
    )
}

export default CardDropdown