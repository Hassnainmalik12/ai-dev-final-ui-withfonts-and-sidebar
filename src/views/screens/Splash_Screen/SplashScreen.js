import React, { useState, useEffect } from 'react';
import { navigateToScreen } from "../../../utils/nav_controller";
import { SCREEN } from "../../../models/constants/screen";
import splashGif from '../../../images/preloader.gif';

const SplashScreen = () => {
    const [text, setText] = useState('Ai dev is coming.');
    const [animate, setAnimate] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setText('Ai dev is coming..');
        }, 500);

        const secondTimer = setTimeout(() => {
            setText('Ai dev is coming...');
        }, 1000);
        const thirdTimer = setTimeout(() => {
            setText('Ai dev is coming...');
        }, 1500);
        const fourthTimer = setTimeout(() => {
            setText('Ai dev is coming....');
        }, 2100);
        const animateTimer = setTimeout(() => {
            setAnimate(true);

        }, 2100);
        const navigateTimer = setTimeout(() => {
            setLoaded(true);
        }, 2800);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(fourthTimer);
            clearTimeout(animateTimer);
            clearTimeout(navigateTimer);
        };
    }, []);

    useEffect(() => {
        if (loaded) {
            navigateToScreen(SCREEN.MAIN);
        }
    }, [loaded]);

    return (
        <div className={`splash ${animate ? 'animate-up' : ''}`} onClick={event => navigateToScreen(SCREEN.APP)}>
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