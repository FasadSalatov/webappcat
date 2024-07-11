import React, { useState, useEffect } from "react";
import { Notcoin } from "../notcoin";
import headerimg from './header.png';
import headerimg2 from './header2.png';
import foot from './foot.png';

export const Main = () => {
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
                <img src={headerimg} alt="header" width='100%' />
                <img src={headerimg2} alt="header" width='100%' id="img2" />
            </header>
            <main>
                <h1>🪙{money}</h1>
                <div className="notcoin">
                    <Notcoin 
                        canIClickPlease={true}
                        sleep={false}
                        funMode={false}
                        clickValue={1}
                        cooldown={0}
                        handleClick={handleNotcoinClick}
                    />
                </div>
                <div className="energy">
                    <p>⚡{energy}/5000</p>
                    <p>🚀boost</p>
                </div>
                <div className="foot">
                    <img src={foot} alt="" width='95%' />
                </div>
            </main>
        </React.StrictMode>
    );
};
