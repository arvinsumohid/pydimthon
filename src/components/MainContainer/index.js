import React from 'react';
import TopNav from '../TopNav';
import SideNav from '../SideNav';

import './index.scss'

const MainContainer = ( {pageKey, children} ) => {
    return (
        <main className="main">
            <TopNav />
            <div className="flex height-100">
                <SideNav className="shrink" pageKey={pageKey}/>
                <div className="auto">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default MainContainer;