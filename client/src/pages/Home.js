import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const menuClick = (e) => {
        e.preventDefault();
        navigate('menu');
    };

    const cartClick = (e) => {
        e.preventDefault();
        navigate('cart');
    };

    return (
    <div>
        <button onClick={menuClick}>To menu</button>
        <button onClick={cartClick}>To cart</button>
    </div>
  );
}

export default Home