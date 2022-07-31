import styled from "styled-components";
import { ReactComponent as CloseButton } from '../../assets/close.svg';

export const LoggedOffUserStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0, 0.7);
    padding: 25px;
    max-width: 900px;
    width: 100%;
`
export const LoggedOffUserClosedButton = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
`

export const LoggedOffUserCloseSvg = styled(CloseButton)`
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    fill: white;
`

export const LoggedOffUserTitle = styled.h2`
    font-size: 55px;
    line-height: 70px;
    font-weight: 400;
    color: white;
`