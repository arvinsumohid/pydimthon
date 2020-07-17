import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import allActions from '../../store/actions';

import './index.scss';

import logo from '../../assets/images/logo.png';


const TopNav = ({children}) => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()



    // const accountSub = (evt) => {
    //     evt.preventDefault()
    //     const accSub = document.querySelector('.top-nav__acc-sub')

    //     if(accSub.classList.contains('active'))
    //         accSub.classList.remove('active')
    //     else
    //        accSub.classList.add('active')
    // }

    const logout = (evt) => {
        evt.preventDefault();
        dispatch(allActions.userActions.logout())
    }

    return (
        <nav className="top-nav">
            <div className="top-nav__container flex">
                <div className="top-nav__logobox shrink">
                    <Link to='/'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>

                <div className="top-nav__indicator shrink">
                    <span>{user.type}</span>
                </div>
                <div className="top-nav__filler auto">

                </div>
                <div className="top-nav__menu shrink">
                    <ul>
                        <li>
                            <a href="/logout" onClick={logout}>Logout</a>
                            {/*<a href="#accounts" onClick={accountSub}>Account</a>
                             <ul className="top-nav__acc-sub">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><a href="/logout" onClick={logout}>Logout</a></li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;