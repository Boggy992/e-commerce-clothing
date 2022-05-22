import { useContext } from 'react';
import { CardContext } from '../../contexts/card-dropdown.context';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.style.scss';

const CardDropdown = () => {
    const { isCardOpen } = useContext(CardContext);

    return (
        <div className={`${isCardOpen ? 'card-dropdown--active' : ''} card-dropdown`}>
            <CustomButton isShopButton>Go to checkout</CustomButton>
        </div>
    )
}

export default CardDropdown