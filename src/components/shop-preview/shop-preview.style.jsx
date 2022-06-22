import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ShopCardLink = styled(Link)`
    display: inline-block;
    color: #1b1b1b;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        text-decoration: underline;
    }
`

export const ShopCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`