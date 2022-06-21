import {
    CardItemStyled,
    CardSmallImage,
    CardQuantity
} from './card-item.style';

const CardItem = ({ name, imageUrl, price, quantity }) => {
    return (
        <CardItemStyled>
            <CardSmallImage src={imageUrl} alt={imageUrl}></CardSmallImage>
            <div>
                <h3>{name}</h3>
                <CardQuantity>{quantity}</CardQuantity>
                <span>{price}</span>
            </div>
        </CardItemStyled>
    )
}

export default CardItem;