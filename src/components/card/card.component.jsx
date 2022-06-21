import React from "react";
import {
    HomepageCardStyled,
    HomepageImageWraperStyled,
    HomepageWrapStyled,
    HomepageTitleStyled,
    HomepagesubtitleStyled
} from './card.style';

const Card = ({ title, imageUrl, size }) => (
    <HomepageCardStyled size={size} to={`shop/${title}`}>
        <HomepageImageWraperStyled imageUrl={imageUrl}>
            <HomepageWrapStyled>
                <HomepageTitleStyled>{title}</HomepageTitleStyled>
                <HomepagesubtitleStyled>shop now</HomepagesubtitleStyled>
            </HomepageWrapStyled>
        </HomepageImageWraperStyled>
    </HomepageCardStyled>
)

export default Card;