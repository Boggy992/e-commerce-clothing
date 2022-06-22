import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    width: 100%;
`

export const HeaderWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    text-align: center;
`

export const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`
export const HeaderOption = styled(Link)`
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    position: ${({ isPositionRelative }) => isPositionRelative && 'relative'};
    & + & {
        margin-left: 25px;
    }
`