import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import Holder from '../../../components/Holder/';

import './index.scss';

const Homepage = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const user = useSelector(state => state.user.user)

    if( !isLoggedIn )
        return <Redirect to='/login' />

    console.log(user)
    return (
        <Holder>
            <h1>{`${user.fname} ${user.lname}`}</h1>
            <h2>Homepage</h2>
        </Holder>
    )
}

export default Homepage;