import React from 'react';
import { Link } from 'react-dom';
import NavPhoto from '../../assets/profile_pic.png';

const Navigationbar = () => {
    return (
        <div className="navigation-menu">
            <div className="logo-section">
                <Link to="/">
                    <img src={NavPhoto} className="navphoto" alt="me" />
                </Link>
            </div>
            <div className="nav-links">

            </div>
        </div>
    )
}

export default Navigationbar;