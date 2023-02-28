import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    
    const [menu, setMenu] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/catalog/list', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res));
    }, []);

    
    return (
    <div>Menu</div>
  )
}

export default Menu