import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import LogoForm from '../../components/LogoForm/';
import TitleFormBox from '../../components/TitleFormBox/';
import Inputfield from '../../components/Inputfield/';

import './index.scss';

const Register = () => {
    const [props, setProps] = useState({
        'title' : 'Register',
         'message' : <p>Already registered? <a href="/login">Login</a></p>
    })

    //handle Events
    const handleInputChange = (evt) => {
        const password = evt.target.value
    }


    return (
        <LogoForm className="login">
            <TitleFormBox props={props}>
                    <form>
                        <Inputfield type="text" placeholder="School ID" onChange={handleInputChange} required/>
                        <Inputfield type="text" placeholder="First Name" onChange={handleInputChange} required/>
                        <Inputfield type="text" placeholder="Last Name" onChange={handleInputChange} required/>
                        <Inputfield type="email" placeholder="Email" onChange={handleInputChange} required/>
                        <Inputfield type="password" placeholder="Password" onChange={handleInputChange} required/>
                        <Inputfield type="password" placeholder="Re-password" onChange={handleInputChange} required/>
                        <Inputfield type="submit" value="Register" className="button" />
                    </form>
            </TitleFormBox>
        </LogoForm>
    )
}

export default Register;