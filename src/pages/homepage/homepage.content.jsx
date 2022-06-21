import React from "react";

import Directory from '../../components/directory/directory.component.jsx';

import { Wrap } from "../../layout.style";
import { HomepageStyled } from './homepage.style'

const HomePage = () => (
    <HomepageStyled>
        <Wrap>
            <Directory />
        </Wrap>
    </HomepageStyled>
);

export default HomePage;