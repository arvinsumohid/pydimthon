import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import Button from '../../components/Button/';
import Holder from '../../components/Holder/';
import Inputfield from '../../components/Inputfield/';

import logo from '../../assets/images/logo.png';
import './index.scss';

const Login = () => {
    const [signInModal, setSignInModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInValidated, setSignInValidated] = useState(false);
    const [signUpValidated, setSignUpValidated] = useState(false);
    const [signInUser, setSignInUser] = useState([])
    const isLoggedIn = useSelector(state => state.user.loggedIn)

    //modal show
    const signInShow = () => setSignInModal(true)
    const signUpShow = () => setSignUpModal(true)
    
    //modal hide
    const signInHide = () => setSignInModal(false)
    const signUpHide = () => setSignUpModal(false)

    //handle event
    const handleEmailChange = (evt) => {
        const email = evt.target.value
        setSignInUser({ ...signInUser, email : email })
    }

    const handlePasswordChange = (evt) => {
        const password = evt.target.value
        setSignInUser({ ...signInUser, password : password })
    }

    const handleSignIn = (evt) => {
        evt.preventDefault();
        console.log('test');
        const form = evt.currentTarget;

        console.log(form)

        setSignInValidated(true);
    }

    const handleSignUp = (evt) => {
        evt.preventDefault();

        const form = evt.currentTarget;

        console.log(form);
        
        setSignUpValidated(true);
    }


    if( isLoggedIn )
        return <Redirect to='/' />


    return (
        <section className="login">
            <div className="login__container">
                <div className="login__image-container">
                    <Holder>
                        <header className="login__titlebox">
                            <h1 className="login__title">PyDimThon</h1>
                        </header>
                        <div className="login__imagebox">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Holder>
                </div>
                <div className="login__content-container">
                    <Holder>
                        <header className="login__content-titlebox">
                            <h2 className="login__content-title">Sign In</h2>
                            <p className="login__text">Don't have an account? <a href="#">Create your account</a></p>
                        </header>
                        <div className="login__form">
                            <form>
                                <Inputfield type="email" placeholder="Email" required/>
                                <Inputfield type="password" placeholder="Password" containerClass="inputfield--margin-bottom" required/>
                                <Inputfield type="submit" value="Continue" className="button" />
                            </form>
                        </div>
                    </Holder>
                </div>
                {/* <div className="login__btnbox">
                    <Button className="button--blue" onClick={handleSignIn}>Sign In</Button>
                    <Button className="button--blue" onClick={handleSignUp}>Sign Up</Button>
                </div> */}
            </div>
        </section>
    )
}

export default Login;