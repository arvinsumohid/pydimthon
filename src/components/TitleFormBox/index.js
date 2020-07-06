import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import Holder from '../Holder';
import Inputfield from '../Inputfield';

import './index.scss';

const TitleFormBox = ({children, props}) => {
    const {title, message} = props

    return (
        <Holder>
            <header className="logo-text__titlebox">
                <h2 className="logo-text__title">{title}</h2>
                {message}
            </header>
            <div className="logo-text__form">
                {children}
            </div>
        </Holder>
    )
}

export default TitleFormBox;