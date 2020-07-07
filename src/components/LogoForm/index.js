import React from 'react';

import Holder from '../Holder/';
import logo from '../../assets/images/logo.png';

import './index.scss';

const LogoForm = ({children, className = ''}) => {


    return (
        <section className={`logo-form ${className}`}>
            <div className="logo-form__container">
                <div className="logo-form__image-container">
                    <Holder>
                        <header className="logo-form__titlebox">
                            <h1 className="logo-form__title">PyDimThon</h1>
                        </header>
                        <div className="logo-form__imagebox">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Holder>
                </div>
                <div className="logo-form__content-container">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default LogoForm;