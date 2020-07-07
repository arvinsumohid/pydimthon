import React from 'react';

import Holder from '../Holder';

import './index.scss';

const TopNav = ({children, props}) => {
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

export default TopNav;