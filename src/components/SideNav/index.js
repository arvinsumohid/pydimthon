import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import './index.scss';

const SideNav = ({pageKey, className = ''}) => {
    const links = useSelector(state => state.user.links)

    return (
        <nav className={`side-nav ${className}`}>
            <ul>
                {
                    links.map(link => {
                        let className = '';
                        if( link.key === pageKey )
                            className = 'active'

                        return (
                            <li key={link.key}  className={`item ${className}`}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default SideNav;