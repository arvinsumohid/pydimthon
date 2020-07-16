import React from 'react';
import TopNav from '../TopNav';
import SideNav from '../SideNav';

import './index.scss'

const MainContainer = ({children}) => {
    return (
        <main className="main">
            <TopNav />
            <div className="flex height-100">
                <SideNav className="shrink"/>
                <div className="auto">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default MainContainer;