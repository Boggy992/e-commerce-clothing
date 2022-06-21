import { Link } from "react-router-dom";

import styled from "styled-components";

export const HomepageWrapStyled = styled.div`
    padding: 12px 16px;
    background: rgba(255,255,255, 0.7);
    transition: background-color 5s ease;
`

export const HomepageImageWraperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 5s ease;
    &:hover {
        transform: scale(1.1);
    }
`
export const HomepageTitleStyled = styled.h1`
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 300;
    color: #030303;
`

export const HomepagesubtitleStyled = styled.h2`
    text-transform: uppercase;
    font-weight: 300;
    color: #030303;
`

export const HomepageCardStyled = styled(Link)`
    flex: 1 1 calc(33% - 25px);
    min-height: ${({ size }) => size ? '400px' : '300px'};
    text-align: center;
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 10s ease;
    &:not(:nth-child(3)):not(:last-child) {
        margin-right: 25px;
    }

    &:hover ${HomepageWrapStyled} {
        background: rgba(255,255,255, 1);
    }
`