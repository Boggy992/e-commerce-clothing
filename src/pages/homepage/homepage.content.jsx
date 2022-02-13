import React from "react";

import Directory from '../../components/directory/directory.component.jsx';

import './homepage.style.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='wrap'>
            <Directory />
        </div>
    </div>
);

export default HomePage;