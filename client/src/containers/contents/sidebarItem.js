import React from 'react';
import { setActiveMenu } from '../../redux/actions/ui/sidebarActions';
import { useSelector, useDispatch } from 'react-redux';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom'

const SidebarItem = (props) => {
    const dispatch = useDispatch();
    const activeMenu = useSelector((state) => state.sidebar.activeMenu);

    const handleClick = () => {
        dispatch(setActiveMenu(props.itemName));
    };

    return (
        <Link to={props.path || '/'}>
            <div>
                <div className={activeMenu === props.itemName ? 'menu-item active' : 'menu-item'} onClick={handleClick}>
                    <span className='active-dot'>
                        {
                            activeMenu === props.itemName &&
                            <GoDotFill color='darkblue' style={{ marginLeft: '10px' }}></GoDotFill>
                        }
                    </span>
                    <span className='icon'>
                        {props.icon}
                    </span>
                    <span className='title' style={props.style}>
                        {props.itemName}
                    </span>
                </div>
            </div>
        </Link>

    );
};

export default SidebarItem;