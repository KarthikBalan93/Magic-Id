import React from 'react';
import SidebarItem from './contents/sidebarItem';
import Logo from '../components/Logo';
import { PiHouse } from "react-icons/pi";
import { GoWorkflow } from "react-icons/go";
import { FaSearchDollar } from "react-icons/fa";
import { FaQ } from "react-icons/fa6";
import { TbAlignBoxBottomRight } from "react-icons/tb";


const Sidebar = () => {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: <PiHouse size={18} color='darkblue' />,
      path: '/dashboard'
    },
    {
      title: 'Workflow',
      icon: <GoWorkflow size={18} color='darkblue'/>,
      path: 'workflow'
    },
    {
      title: 'Analysis',
      icon: <TbAlignBoxBottomRight size={18} color='darkblue' />,
      path: 'analysis'
    },
    {
      title: 'Customer Offers',
      icon: <FaSearchDollar size={18} color='darkblue' />,
      path: 'customer-offers'
    },
    {
      title: 'FAQs',
      icon: <FaQ size={18} color='darkblue' />,
      path: 'faq'
    }
  ];
  const bottomMenuItems = [
    {
      title: 'System Status',
    },
    {
      title: 'Privacy Policy'
    },
    {
      title: 'Terms & Conditions'
    },
  ]

  return (
    <div style={{ width: '200px' }}>
      <Logo />
      <div className="menu top-menu">
        {menuItems.map((item) => (
          <SidebarItem key={item.title} itemName={item.title} icon={item.icon} path={item.path} />
        ))}
      </div>
      <div className="menu bottom-menu">
        {bottomMenuItems.map((item) => (
          <SidebarItem key={item.title} itemName={item.title} path={item.path} style={{color: '#000', fontWeight: 100}}/>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
