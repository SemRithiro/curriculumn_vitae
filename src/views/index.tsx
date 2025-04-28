import React from 'react';

import Profile from '../assets/imgs/profile.png';

export default function Index() {
    return <>
        <div className="nav-bar">
            <h2><span>&lt;/&gt;</span> Developer</h2>
        </div>
        <img src={Profile} alt="user-profile" />
    </>
}