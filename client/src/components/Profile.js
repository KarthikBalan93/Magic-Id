import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const Profile = ({ name, profileIcon }) => {
    const [isDisplayInitial, setIsDisplayInitial] = useState(false);
    const names = name.split(' ');
    const firstInitial = names[0] ? names[0].charAt(0).toUpperCase() : '';
    const lastInitial = names[1] ? names[1].charAt(0).toUpperCase() : '';

    const setInitial = () => {
        setIsDisplayInitial(true);
    };

    return (
        <div className="profile-container">
            <img
                src={profileIcon}
                onError={setInitial}
                id="profile-icon"
                alt="Profile Icon"
                style={{ display: isDisplayInitial ? 'none' : 'block' }}
            />
            {isDisplayInitial && (
                <div className="initials">{`${firstInitial}${lastInitial}`}</div>
            )}
            <span>{name}</span>
            <span className='pt-1 px-2'>
                <FaChevronDown />
            </span>
        </div>
    );
};

export default Profile;