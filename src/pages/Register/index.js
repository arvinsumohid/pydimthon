import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import './index.scss';

const Register = () => {
    const [user, setUser] = useState({
                                schoolId : '',
                                fname : '',
                                lname : '',
                                email : '',
                                password : '',
                                rePassword : ''
                            })
    const [additionalClass, setAdditionalClass] = useState('');
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const [props] = useState({
        'title' : 'Register',
         'message' : <p>Already registered? <a href="/login">Login</a></p>
    })

    useEffect(() => {
        if(user.password !== undefined) {
            if(user.password !== user.rePassword)
                setAdditionalClass('inputfield--red-border');
            else if( user.password === user.rePassword )
                setAdditionalClass('inputfield--green-border');
        }

    }, [user.password, user.rePassword])

    //handle Events
    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        setUser({...user, [name]:value})
    }

    if( isLoggedIn )
        return <Redirect to='/' />

    return (
        <LogoForm className="login">
            <TitleFormBox props={props}>
                    <form>
                        <Inputfield type="text" name="schoolId" placeholder="School ID" onChange={handleInputChange} required/>
                        <Inputfield type="text" name="fname" placeholder="First Name" onChange={handleInputChange} required/>
                        <Inputfield type="text" name="lname" placeholder="Last Name" onChange={handleInputChange} required/>
                        <Inputfield type="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
                        <Inputfield containerClass={additionalClass} type="password" name="password" placeholder="Password" onChange={handleInputChange} required/>
                        <Inputfield containerClass={additionalClass} type="password" name="rePassword" placeholder="Re-password" onChange={handleInputChange} required/>
                        <Inputfield type="submit" value="Register" className="button" />
                    </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Register;