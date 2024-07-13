// src/Tree.tsx
import React, { useState, useEffect } from "react";
import { Notcoin } from "../notcoin";
import { Link } from 'react-router-dom';
import headerimg from './header.png';
import main3 from './main3.png';
import foot1 from './foot1.png';
import foot2 from './foot2.png';
import foot3 from './foot3.png';
import foot4 from './foot4.png';
import foot5 from './foot5.png';

export const Tree = () => {
    const [money, setMoney] = useState(507981);
    const [energy, setEnergy] = useState(5000);

    // Function to handle Notcoin button click
    const handleNotcoinClick = () => {
        setEnergy(prevEnergy => Math.max(prevEnergy - 4, 0)); // Ensure energy doesn't go below 0
        setMoney(prevMoney => prevMoney + 1); // Increment money by 1
    };

    // Effect to increment energy by 2 every second
    useEffect(() => {
        const interval = setInterval(() => {
            setEnergy(prevEnergy => Math.min(prevEnergy + 2, 5000)); // Ensure energy doesn't go above 5000
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <React.StrictMode>
            <header>

                <img className="main3" src={main3} alt="header" width='100%' id="img2" height='100%'/>
            </header>
            <main>
                <div className="foot">
                    <div className="footer">
                        <button><Link to="/"><img src={foot1} alt=""/><p>Exchange</p></Link></button>
                        <button><Link to="/second"><img src={foot2} alt=""/><p>Mine</p></Link></button>
                        <button><a href=""><img src={foot3} alt=""/><p>Friends</p></a></button>
                        <button><a href=""><img src={foot4} alt=""/><p>Earn</p></a></button>
                        <button><Link to="/tree"><img src={foot5} alt=""/><p>Airdrop</p></Link></button>
                    </div>
                </div>
            </main>
        </React.StrictMode>
    );
};
