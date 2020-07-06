import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import './index.scss';

const Login = () => {
    const [signInValidated, setSignInValidated] = useState(false)
    const [signUpValidated, setSignUpValidated] = useState(false)
    const [props, setProps] = useState({
                                    'title' : 'Sign In',
                                     'message' : <p>Don't have an account? <a href="/register">Create your account</a></p>
                                })
    const [loginUser, setLoginUser] = useState([{'error' : ''}])
    const isLoggedIn = useSelector(state => state.user.loggedIn)

    //handle event
    const handleEmailChange = (evt) => {
        const email = evt.target.value
        setLoginUser({ ...loginUser, email : email })
    }

    const handlePasswordChange = (evt) => {
        const password = evt.target.value
        setLoginUser({ ...loginUser, password : password })
    }

    const loginForm = (evt) => {
        evt.preventDefault();
    }

    if( isLoggedIn )
        return <Redirect to='/' />


    return (
        <LogoForm className="login">
            <TitleFormBox props={props}>
                <form onSubmit={loginForm}>
                    <Inputfield type="email" placeholder="Email" onChange={handleEmailChange} required/>
                    <Inputfield type="password" placeholder="Password" onChange={handlePasswordChange} containerClass="inputfield--margin-bottom" required/>
                    <Inputfield type="submit" value="Continue" />
                </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Login;