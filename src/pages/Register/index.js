import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import './index.scss';

const Register = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const [props] = useState({
        'title' : 'Register',
         'message' : <p>Already registered? <a href="/login">Login</a></p>
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

    useEffect(() => {
        if(user.password.value !== '' || user.rePassword.value !== '') {
            if(user.password.value !== user.rePassword.value)
                setUser({
                        ...user,
                        password : {
                            value : user.password.value,
                            type : user.password.type,
                            placeholder : user.password.placeholder,
                            required : user.password.required,
                            containerClass : 'inputfield--red-border'
                        },
                        rePassword :  {
                            value : user.rePassword.value,
                            type : user.rePassword.type,
                            placeholder : user.rePassword.placeholder,
                            required : user.rePassword.required,
                            containerClass : 'inputfield--red-border'
                        }
                    });
            else if( user.password.value === user.rePassword.value )
                setUser({
                        ...user,
                        password : {
                            value : user.password.value,
                            type : user.password.type,
                            placeholder : user.password.placeholder,
                            required : user.password.required,
                            containerClass : 'inputfield--green-border'
                        },
                        rePassword :  {
                            value : user.rePassword.value,
                            type : user.rePassword.type,
                            placeholder : user.rePassword.placeholder,
                            required : user.rePassword.required,
                            containerClass : 'inputfield--green-border'
                        }
                     });
        }
    }, [user, user.password.value, user.rePassword.value])

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

    if( isLoggedIn )
        return <Redirect to='/' />

    return (
        <LogoForm className="login">
            <TitleFormBox props={props}>
                    <form>
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

                    </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Register;