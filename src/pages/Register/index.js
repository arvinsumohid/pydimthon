import React, { useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';
import allActions from '../../store/actions';

import './index.scss';

const Register = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const error = useSelector(state => state.user.error)
    const dispatch = useDispatch()
    const [props] = useState({
        'title' : 'Register',
         'message' : <p>Already registered? <Link to="/login">Login</Link></p>
    })
    const [user, setUser] = useState({
        schoolId : {
            type : 'text',
            placeholder : 'School ID',
            value : '',
            containerClass : '',
            required: true,
        },
        fname : {
            type : 'text',
            placeholder : 'First Name',
            value : '',
            containerClass : '',
            required: true,
        },
        lname : {
            type : 'text',
            placeholder : 'Last Name',
            value : '',
            containerClass : '',
            required: true,
        },
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
            containerClass : '',
            required: true,
        },
        rePassword : {
            type : 'password',
            placeholder : 'Re-Password',
            value : '',
            containerClass : '',
            required: true,
        }
    })

    //handle Events
    const handleInputChange = (fieldKey, evt) => {
        const {value, type, placeholder, required, containerClass} = evt.target;
        setUser({
                ...user,
                [fieldKey] : {
                    value : value,
                    type: type,
                    placeholder: placeholder,
                    required: required,
                    containerClass: containerClass
                }
            })
    }

    const registerForm = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        let {password, rePassword} = {...user}
        

        password = {...password, ...( password.value !== rePassword.value ? {containerClass: 'inputfield--red-border'} : {containerClass: 'inputfield--green-border'} )}
        rePassword = {...rePassword, ...( password.value !== rePassword.value ? {containerClass: 'inputfield--red-border'} : {containerClass: 'inputfield--green-border'} )}
        setUser({
            ...user,
            password,
            rePassword
        })

        if(password.value === rePassword.value )
            dispatch(allActions.userActions.register(user))
    }

    if( isLoggedIn )
        return <Redirect to='/' />

    return (
        <LogoForm className="login">
            <TitleFormBox props={props}>
                    <form onSubmit={registerForm}>
                        {Object.keys(user).map(fieldKey => {
                            return <Inputfield
                                key={fieldKey}
                                value={user[fieldKey].value}
                                type={user[fieldKey].type}
                                placeholder={user[fieldKey].placeholder}
                                required={user[fieldKey].required}
                                containerClass={user[fieldKey].containerClass}
                                onChange={(evt) => handleInputChange(fieldKey, evt)}
                            />
                        })}
                        <Inputfield type="submit" value="Register" className="button" />
                        <div className="msg">
                            {error.status && <span className="error">{error.message}</span>}
                        </div>
                    </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Register;