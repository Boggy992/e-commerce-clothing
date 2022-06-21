import styled from 'styled-components';

export const CheckoutDirectoryStyled = styled.div`
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
`

export const CheckoutDirectoryTitles = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-bottom: 2px solid #e3e3e3;
    & > h3 {
        flex: 1 1 20%;
    }
`

export const CheckoutDirectoryTitle = styled.h1`
    text-align: center;
    padding: 200px 0;
`

export const CheckoutDirectoryTotalPrice = styled.h2`
    font-size: 30px;
    font-weight: 400;
    text-align: right;
    padding: 15px 0;
`
