import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import allActions from '../../store/actions';

import './index.scss';

const Login = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const isError = useSelector(state => state.user.error.status)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
                            email : {
                                type : 'email',
                                placeholder : 'Email',
                                value : '',
                                containerClass : '',
                                required: true,
                            },
                            password : {
                                type : 'password',
                                placeholder : 'Password',
                                value : '',
                                required: true,
                            }
                        })
    

    //handle event
    const handleInputChange = (fieldKey, evt) => {
        const {value, type, placeholder, required} = evt.target

        setUser({
                ...user,
                [fieldKey] : {
                    value : value,
                    type: type,
                    placeholder: placeholder,
                    required: required,
                }
            })
    }

    const loginForm = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        dispatch(allActions.userActions.login(user))

    }

    if( isLoggedIn )
        return <Redirect to='/' />


    return (
        <LogoForm className="login">
            <TitleFormBox title="Sign Up" message={<p>Don't have an account? <Link to="/register">Create your account</Link></p>}>
                <form onSubmit={loginForm}>
                        {Object.keys(user).map(fieldKey => {
                            return <Inputfield
                                key={fieldKey}
                                value={user[fieldKey].value}
                                type={user[fieldKey].type}
                                placeholder={user[fieldKey].placeholder}
                                required={user[fieldKey].required}
                                onChange={(evt) => handleInputChange(fieldKey, evt)}
                            />
                        })}
                    <Inputfield type="submit" value="Continue" />
                    <div className="msg">
                        {isError && <span className="error">Invalid Email/Password!</span>}
                    </div>
                </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Login;