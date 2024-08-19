import React, { useState, useEffect } from 'react';
import { navigateToScreen } from "../../../utils/nav_controller";
import { SCREEN } from "../../../models/constants/screen";
// import '../../../splash.css';
import splashGif from '../../../images/preloader.gif';

const SplashScreen = () => {
    const [text, setText] = useState('Ai dev is coming.');

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setText('Ai dev is coming..');
        }, 700);

        const secondTimer = setTimeout(() => {
            setText('Ai dev is coming...');
        }, 1400);
        const thirdTimer = setTimeout(() => {
            setText('Ai dev is coming...');
        }, 2100);
        const fourthTimer = setTimeout(() => {
            setText('Ai dev is coming....');
        }, 2800);
     const navigateTimer = setTimeout(() => {
            navigateToScreen(SCREEN.MAIN)
        }, 3500);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(fourthTimer);
            clearTimeout(navigateTimer);
        };
    }, []);

    return (
        <div className="splash" onClick={event => navigateToScreen(SCREEN.APP)}>
            <div className="center-box">
                <div className="splash-gif">
                    <img src={splashGif} alt="splash gif" />
                </div>
                <div className="splash-bar">
                    <div className="splash-bar-inner"></div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
