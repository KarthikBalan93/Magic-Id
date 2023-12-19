import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import '../css/dropdownComponent.css';

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        const isSelected = selectedOptions.includes(option);

        if (isSelected) {
            setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
        } else {
            if (props.singleSelection) setSelectedOptions([option])
            else setSelectedOptions([...selectedOptions, option]);
        }

        props.onSelect && props.onSelect(selectedOptions);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                <span className="button-content">
                    {props.icon ? props.icon : <></>}
                    <span className="button-name">{props.name}</span>
                    <FaAngleDown color={'grey'} className={`icon ${isOpen ? 'open' : ''}`} />
                </span>
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {props.options.map((option) => (
                        <li
                            key={option}
                            className={`list-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
