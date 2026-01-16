import React from 'react'
import ThemeToggle from '../theme-toggle/ThemeToggle.jsx'

const SideNav = () => {
    return (
        <div>
            <div className="profile-area">
                profil
            </div>
            <div className="theme-area">
                <ThemeToggle />
            </div>
        </div>
    )
}

export default SideNav