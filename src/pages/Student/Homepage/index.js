import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import Holder from '../../../components/Holder/';
import MainContainer from '../../../components/MainContainer/';

import './index.scss';

const Homepage = () => {
    const pageKey = 'dashboard'
    const isLoggedIn = useSelector(state => state.user.loggedIn)
    const user = useSelector(state => state.user.user)

    if( !isLoggedIn )
        return <Redirect to='/login' />

    return (
        <MainContainer pageKey={pageKey}>
            <Holder>
                <h1>{`${user.fname} ${user.lname}`}</h1>
                <h2>Homepage</h2>
            </Holder>
        </MainContainer>
    )
}

export default Homepage;