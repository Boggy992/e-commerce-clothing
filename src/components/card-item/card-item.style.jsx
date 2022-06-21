import styled from 'styled-components';

export const CardItemStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const CardSmallImage = styled.img`
    width: 80px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
`
export const CardQuantity = styled.span`
    &::after {
        content: 'x';
        margin: 0 3px;
    }
`