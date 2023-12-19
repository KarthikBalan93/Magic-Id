import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import '../css/loader.css'; // Add your loader styling here

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-container">
                <FaSpinner className="loader-icon" />
                <span>Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
