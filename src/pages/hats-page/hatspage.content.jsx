import React from "react";

import HatsDirectory from '../../components/hatsDirectory/hatsDirectory.component'

import '../../layout.style.scss';

const HatsPage = () => (
    <div className='hatspage'>
        <div className='wrap'>
            <HatsDirectory />
        </div>
    </div>
)

export default HatsPage;