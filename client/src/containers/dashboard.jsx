import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import ApplicantList from './contents/ApplicantList';

export default function Dashboard() {
    return (
        <div className='wrapper-content'>
            <div className='content-temp'>
                <header>
                    <div>
                        <span className='back-btn'>
                            <FaChevronLeft size={12} color={'darkblue'} />
                        </span>
                        <span className='page-title'>
                            Applicant Results
                        </span>
                    </div>
                </header>
                <div className='page-component'>
                    <ApplicantList />
                </div>
            </div>
        </div>
    )
}
