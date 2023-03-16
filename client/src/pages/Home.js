import React from 'react';
import { useNavigate } from 'react-router-dom';
import foodBackground from '../assets/food_background.jpeg';


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
        <img 
            alt="restauraunt food" 
            src={foodBackground}
            style={{
                width: "100%",
                filter: "brightness(50%)"
            }}
        />
        <div 
            style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%"
        }}
        >
            <h3 
                className="inika"
                style={{
                    fontSize: "32px",
                    color: "white",
                    textAlign: "center",
                    margin: "8px 0px 0px 0px"
                }}
        >
            Mighty Mo's</h3>
        
        <h2
            className="inika"
            style={{
                textAlign: "center",
                color: "white",
                fontSize: "48px",
                margin: "310px 0px 0px 0px"
            }}
        >
            EXPERIENCE AUSTIN FOOD LIKE NO OTHER
        </h2>
        <h1
            className="inika"
            style={{
                textAlign: "center",
                fontSize: "72px",
                color: "white",
                margin: "0px"
            }}
        >
            Experience Mighty Mo's</h1>
        <h4
            className="inika"
            style={{
                textAlign: "center",
                color: "white",
                margin: "0px",
                fontSize: "36px"
            }}
        >
            Halal food directly from Canada and Philadelphia
        </h4>
        <button
            className="inika"
            style={{
                display: "block",
                margin: "73px auto 0px auto",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "#DD2E44",
                padding: "32px 23.5px 32px 23.5px",
                fontSize: "28px"
            }}
        >
            Order online
        </button>
        </div>
    </div>
  );
}

export default Home;