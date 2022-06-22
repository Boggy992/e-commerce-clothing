import React from "react";

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, isCardButton, isShopButton, ...rest }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''}${isCardButton ? 'card-button' : ''}${isShopButton ? 'shop-button': ''} custom-button`} {...rest}>
            {children}
    </button>
)

export default CustomButton;