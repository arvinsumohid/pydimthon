import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import './index.scss';

const Login = () => {
    const [user, setUser] = useState({
                                email : '',
                                password : ''
                            })
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const [props] = useState({
                            'title' : 'Sign In',
                            'message' : <p>Don't have an account? <a href="/register">Create your account</a></p>
                        })

    //handle event
    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        setUser({...user, [name]:value})
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
                    <Inputfield type="email" placeholder="Email" onChange={handleInputChange} required/>
                    <Inputfield type="password" placeholder="Password" onChange={handleInputChange} containerClass="inputfield--margin-bottom" required/>
                    <Inputfield type="submit" value="Continue" />
                </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Login;