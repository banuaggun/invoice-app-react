import React from 'react'
import SideNav from './side-nav/SideNav'

const Layout = ({ children }) => {
    return (
        <div className='main-content'>
            <SideNav />
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}

export default Layout