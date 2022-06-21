import React from "react";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpStyled } from './sign-in-and-sign-up.style';

const SignInAndSignUp = () => {
    return (
        <SignInAndSignUpStyled>
            <SignIn />
            <SignUpForm />
        </SignInAndSignUpStyled>
    )
};

export default SignInAndSignUp;