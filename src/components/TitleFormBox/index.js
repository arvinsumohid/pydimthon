import React from 'react';

import Holder from '../Holder';

import './index.scss';

const TitleFormBox = (props) => {
    const {title, message, children} = props

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