import React from 'react';
import { Link }from 'react-router-dom';

const NavBar = ({ curPage }) => {

    const deselectedStyles = {

    }

    const selectedStyles = {

    }
    const linkInfo = [
        {
            text: 'About Us',
            path: '/',
            selected: false
        },
        {
            text: 'Menu',
            path: 'menu',
            selected: false
        },
        {
            text: 'Store',
            path: 'store',
            selected: false
        },
        {
            text: 'Contact',
            path: 'contact',
            selected: false
        },
        {
            text: 'Rewards',
            path: 'rewards',
            selected: false
        }
    ];

    linkInfo[curPage].selected = true;

    return (
    <div>
        {linkInfo.map((item, index) => {
            return <Link 
                key={index}
                to={item.path}
                style={item.selected ? 
                    selectedStyles : 
                    deselectedStyles}
                >{item.text}</Link>
        })}
    </div>
  );
}

export default NavBar;