import { useContext } from 'react';
import { CardContext } from '../../contexts/card-dropdown.context';
import CardItem from '../../components/card-item/card-item.component';
import {
    CardDropdownStyled,
    CardItemsStyled,
    CardItemsTitleStyled,
    CheckoutLinkStyled
} from './card-dropdown.style';

const CardDropdown = () => {
    const { isCardOpen, cardItems } = useContext(CardContext);

    return (
        <CardDropdownStyled isCardOpen={isCardOpen}>
            <CardItemsStyled>
                {
                    !cardItems.length ?
                    <CardItemsTitleStyled>Your card is empty</CardItemsTitleStyled> :
                    cardItems.map(( { id, ...rest } ) => {
                        return <CardItem key={id} {...rest}/>
                    })
                }
            </CardItemsStyled>
            <CheckoutLinkStyled to='/checkout'>Go to checkout</CheckoutLinkStyled>
        </CardDropdownStyled>
    )
}

export default CardDropdown