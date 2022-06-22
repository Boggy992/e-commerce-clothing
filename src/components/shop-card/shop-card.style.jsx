import styled from 'styled-components';

export const ShopCardImage = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    background-image: url('${({ imageUrl }) => imageUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    transition: 0.3s ease;
`

export const ShopCardWrapper = styled.div`
    flex-basis: calc(25% - 19px);
    max-width: calc(25% - 18px);
    margin: 0 25px 30px 0;
    &:nth-child(4n),
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        ${ShopCardImage} {
            background-color: rgba(0,0,0,0.2);
        }
        .card-button {
            visibility: visible;
            opacity: 1;
        }
    }
`

export const ShopCardImageContainer = styled.div`
    position: relative;
    padding-bottom: 129.25%;
	overflow: hidden;
    margin-bottom: 10px;
`

export const ShopCardText = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ShopCardTitle = styled.span`
    font-size: 22px;
    line-height: 22px;
    font-weight: 300;
    letter-spacing: 1;
`

export const ShopCardPrice = styled.span`
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 1;
`