import './card-item.style.scss';

const CardItem = ({ name, imageUrl, price, quantity }) => {
    return (
        <div className='card-item'>
            <img className='card-img-small' src={imageUrl} alt={imageUrl}></img>
            <div className='card-item-wrapper'>
                <h3>{name}</h3>
                <span className='card-quantity'>{quantity}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default CardItem;