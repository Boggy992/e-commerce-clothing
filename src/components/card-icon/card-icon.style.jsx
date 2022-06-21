import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CardIconStyled = styled(ShoppingIcon)`
    width: 28px;
`

export const CardIconCounter = styled.span`
    font-size: 13px;
    font-weight: 550;
    line-height: 1;
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
`