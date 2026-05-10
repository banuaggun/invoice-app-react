import React from 'react';
import ThemeToggle from '../theme-toggle/ThemeToggle.jsx';
import './side-nav.css'; 
import { Link } from 'react-router-dom';
import ProfileIcon from '../../../assets/icons/ProfileIcon.jsx';

const SideNav = () => {
    return (
        <div>
            <div className="sidenav-area flex flex-row align-center justify-between width-100 fixed border-box">
                <Link to="/" className="sidenav-area-logo flex align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--text-color)" viewBox="0 0 256 256"><path d="M82.34,69.66a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,0l40,40a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0Zm51.32,76.68a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32Zm104-24-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34Zm-128,0-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34Z"></path></svg>
                    <span>Invoice App</span>
                </Link>
                <div className="sidenav-area-right flex align-center"> 
                    <Link to="/profile" className='sidenav-area-right-profile flex align-center justify-center width-100 hover-cursor-pointer'> 
                        
                    <ProfileIcon />
                     </Link>
                    <div className="sidenav-area-right-theme width-100 border-box">
                        <ThemeToggle />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideNav