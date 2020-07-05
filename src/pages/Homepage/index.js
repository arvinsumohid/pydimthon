import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import './index.scss';

const Homepage = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn)

    if( !isLoggedIn )
        return <Redirect to='/login' />

    return (
        <h1>Homepage</h1>
    )
}

export default Homepage;