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

import './sign-in.style.scss';

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
            <div className='sign-in'>
                <h2 className='sign-in__title'>I already have an account</h2>
                <h3 className='sign-in__subtitle'>Sign in with your email and password</h3>
                <form className='sign-in__form' onSubmit={this.submitForm}>
                    <FormInput
                        className='sign-in__input'
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        signInValidation={this.signInValidation}
                    />
                    <FormInput
                        className='sign-in__input'
                        name='password'
                        type='password'
                        label=''
                        value={this.state.password}
                        signInValidation={this.signInValidation}
                    />
                    {
                        this.state.flag !== null ?
                            (this.state.flag ?
                            <span className='sign-in__alert'>Email or password is inccorect.</span> :
                            <span className='sign-in__success'>Success</span>) :
                        null
                    }
                    <div className='sign-in__custom-buttons'>
                        <CustomButton type='submit' onClick={this.logUserWithEmailAndPassword}>Sign in</CustomButton>
                        <CustomButton type='submit' isGoogleSignIn onClick={this.logGoogleUser}>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

SignIn.contextType = UserContext;

export default SignIn;