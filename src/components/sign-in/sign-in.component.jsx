import React from "react";
// import {
//     getRedirectResult
// } from "firebase/auth";

import { UserContext } from '../../contexts/user.context'

import './sign-in.component.jsx';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    // auth,
    // createUserDocumentFromAuth,
    // signInWithGoogleRedirect
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
} from "../../firebase/firebase.utils.js";

import {
    SignInStyled,
    SignInTitle,
    SignInSubtitle,
    SignInForm,
    SignInCustomButtons,
    SignInAlert,
    SignInSuccess
} from'./sign-in.style';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            flag: null
        }
    }

    logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    logUserWithEmailAndPassword = async () => {
        const {
            email,
            password
        } = this.state;

        await signInUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // const { user } = userCredential
            // const { setCurrentUser } = this.context;
            // setCurrentUser(user);
            this.setState({ flag: false });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            this.setState({ flag: true });
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    signInValidation = (event) =>  {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    componentDidMount() {
    //     const getRedirectResponse = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRed = createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirectResponse();
    }

    render() {
        return (
            <SignInStyled>
                <SignInTitle>I already have an account</SignInTitle>
                <SignInSubtitle>Sign in with your email and password</SignInSubtitle>
                <SignInForm onSubmit={this.submitForm}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        signInValidation={this.signInValidation}
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label=''
                        value={this.state.password}
                        signInValidation={this.signInValidation}
                    />
                    {
                        this.state.flag !== null ?
                        (this.state.flag ?
                        <SignInAlert>Email or password is inccorect.</SignInAlert> :
                        <SignInSuccess>Success</SignInSuccess>) :
                        null
                    }
                    <SignInCustomButtons>
                        <CustomButton type='submit' onClick={this.logUserWithEmailAndPassword}>Sign in</CustomButton>
                        <CustomButton type='submit' isGoogleSignIn onClick={this.logGoogleUser}>Sign in with google</CustomButton>
                    </SignInCustomButtons>
                </SignInForm>
            </SignInStyled>
        )
    }
}

SignIn.contextType = UserContext;

export default SignIn;