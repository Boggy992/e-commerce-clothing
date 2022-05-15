import React from "react";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUpForm />
        </div>
    )
};

export default SignInAndSignUp;