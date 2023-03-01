import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';

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
        <Topbar />
        <Navbar curPage={0}/>
    </div>
  );
}

export default Home;