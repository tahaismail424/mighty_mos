import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';

const Menu = () => {

    
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const menuItems = [
            
            {
            name: 'Mighty Philly',
            price: 9.99,
            description: 'Philly cheese steak',
            img_src: ''
        }
    ]

        setMenu(menuItems)
    }, []);

    
    return (
    <div>
        <Topbar />
        <Navbar curPage={1}/>
        {menu.map((item, index) => 
            <div key={index}>{item.name} {item.price}</div>
        )}
    </div>
  )
}

export default Menu