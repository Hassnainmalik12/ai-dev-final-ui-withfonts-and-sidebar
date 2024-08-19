import React, { useEffect, useRef, useState } from 'react';
import Typing from "react-typing-effect";

import 'animate.css'; // Import animate.css
import logoIcon from '../../../images/logo.png';
import addIcon from '../../../images/addIcon.png';
import splashGif from '../../../images/preloader.gif';
import Chatbot from '../../../images/Chatbot.png';
import arrow from '../../../images/arrow.png';
import burger from '../../../images/burgerMenu.webp';
import cross from '../../../images/cross.png';
import AiDevBot from '../../../images/Ai Dev Bot Pack Desktop.gif';
import Test from "../../components/Test";
import Example from "../Example";
import DevBotGifSection from "../../components/DevBotGifSection";
import BelowGallerySection from "../../components/below_gallery_section/BelowGallerySection";
import TierSection from "../../components/tier_section/TierSection";
import LowerTierSection from "../../components/lower_tier-section/LowerTierSection";
import RoadmapSlider from "../../components/roadmap_slider/RoadmapSlider";
import Tokonomics from "../../components/tokonomics/Tokonomics";
import ResearchAndDevelopment from "../../components/research_and_development/ResearchAndDevelopment";
import AnimatedButton from "../../components/animated_button/AnimatedButton";
import Trade from "../../components/trade/Trade";
import ChatBot from "../../components/chatbot/ChatBot";
import Sidebar from "../../components/sidebar/Sidebar";


const MainScreen = () => {
    const [isErasing, setIsErasing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    // Function to toggle the div visibility
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };
    const toggleDiv1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDiv2 = () => {
        setIsOpen2(!isOpen2);
    };

    const ref = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const scrollToSection = (ref) => {
        const targetPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2500; // Set the duration in milliseconds (1.5 seconds)
        let startTime = null;

        const smoothScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(smoothScroll);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="main w-screen h-screen">
            {/*burger button*/}
            <div
                className="custom-height-7vh  w-full flex  items-center cursor-pointer"
                onClick={toggleDiv1}
            >
                <div className="w-16 h-16 mt-6 flex hidden items-center justify-center">
                    <img src={burger} alt="Burger Menu" className="h-8"/>
                </div>
            </div>

            {/* Toggleable Div */}
            {isOpen1 && (
                <div className="sidebar-width-res flex w-12 h-12 top-0 left-0 absolute "
                     style={{width: "85vw", height: "100vh", zIndex: 50}}>
                    <Sidebar/>
                    <div className={"h-16 w-16 flex justify-center items-center"} onClick={toggleDiv1}>
                        <img src={cross} alt="" className={'h-8'}/>
                    </div>
                </div>


            )}

            <div className="logo-res-full w-full custom-height-15vh flex ">
                <div className="logo-res  custom-width-20  h-full flex justify-center items-start">
                    <div className="logo w-5/6 h-3/6  flex justify-center items-center ">
                        <img src={logoIcon} alt="Logo"/>
                    </div>
                </div>
                <div className="logo-res1 custom-width-75 h-full "></div>
            </div>

            {/*mid section height*/}

            <div
                className="custom-height-63vh ai-dev-area-height-res main-color  w-full flex justify-center items-center">
                <div className="custom-width-25 add-button-res  h-full flex justify-center items-center">
                    <div className=" w-1/5 h-1/5 flex justify-center items-center">
                        <img src={addIcon} alt="Add Icon"/>
                    </div>
                </div>
                <div
                    className="ai-dev-div-main-res uppercase w-[65%]  h-full flex flex-col justify-between items-center">
                    <p className="ai-dev-media Ai-dev-p"
                       style={{whiteSpace: 'nowrap'}}>
                        AI Dev pioneers decentralized [
                        <span>
        <Typing
            text={["ARTIFICIAL INTELLIGENCE"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            eraseDelay={500}
            cursor={'.'}
            displayTextRenderer={(text) => (
                <span style={{
                    color: '#2ecc71',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    whiteSpace: 'nowrap'
                }}>
                    <span className={"ai-span text-2xl sm:text-sm"}>.</span> {text}
                </span>
            )}
        />
    </span>
                        ] offering innovative AI-driven Telegram bots.
                    </p>


                    <div

                        className="ai-dev-main-title custom-height-70 w-full flex flex-col justify-center items-center">
                        <div
                            className={"ai-dev-div w-full h-[100%] gap-10 flex-col flex justify-center items-center"}>
                            <p className="Ai-dev-text">AI</p>
                            <p className="Ai-dev-text">DEV</p>
                        </div>

                    </div>
                    <p className="text-container1 uppercase Ai-dev-p Ai-dev-bottom-text-resp w-full flex justify-center items-center">
                        AI DEV [
                        <span className="text-container">
        <span className="font-bold green-text">
            Craft websites, Deploy smart contracts, Predict Prices
        </span>
        <span className="pl-2 font-bold">AND</span>
        <span className="pl-2 font-bold">
            Snipe trades
        </span>
    </span>
                        ]
                        <p className="additional-text pl-1">All directly through your Telegram!</p>
                    </p>


                </div>
                <div className="custom-width-25 add-button-res  h-full flex justify-center items-center">
                    <div className="w-1/5 h-1/5 flex justify-center items-center">
                        <img src={addIcon} alt="Add Icon"/>
                    </div>
                </div>
            </div>
            <div className="bottom-bar main-color bottom-bar-res  w-full custom-height-15vh flex">
                <div className="custom-width-15 h-full flex justify-center items-center">
                    <div className="w-1/5 h-1/5 flex justify-center items-center">
                        {/* Optionally include any content here */}
                    </div>
                </div>
                <div className="custom-width-70  h-full flex justify-center items-center relative">
                    <div className="navbar fixed h-20 w-3/6 max-w-3/6 max-h-1/3 bg-black p-2 rounded-lg">
                        <div
                            className="navbar-inner w-full h-full flex justify-between items-center px-4 bg-black py-1">
                            <div className="h-12 flex justify-center items-center px-2">
                                <div className="w-16 h-full flex justify-center">
                                    <img src={splashGif} alt="Splash"/>
                                </div>
                            </div>
                            <div
                                className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                onClick={() => scrollToSection(section1Ref)}>
                                <p className="nav-text text-white uppercase">01. explore</p>
                            </div>
                            <p className="nav-text text-white uppercase">-</p>
                            <div
                                className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                onClick={() => scrollToSection(section2Ref)}>
                                <p className="nav-text text-white uppercase">02. ai bots</p>
                            </div>
                            <p className="nav-text text-white uppercase">-</p>
                            <div
                                className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                onClick={() => scrollToSection(section3Ref)}>
                                <p className="nav-text text-white uppercase">03. docs</p>
                            </div>
                            <p className="nav-text text-white uppercase">-</p>
                            <div
                                className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                onClick={() => scrollToSection(section4Ref)}>
                                <p className="nav-text text-white uppercase">04. connect</p>
                            </div>
                            <p className="nav-text text-white uppercase">-</p>
                            <div
                                className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                onClick={() => scrollToSection(section5Ref)}>
                                <p className="nav-text text-white uppercase">05. trade</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-width-15 h-full flex justify-center items-center relative ">
                    <div className="fixed w-2/6 h-2/6 z-10 flex justify-center items-center" onClick={toggleDiv}>
                        <img src={Chatbot} alt="Chatbot" className="chatbot-img h-max w-24"/>
                        {isOpen && (
                            <div
                                className="chatbot-div  toggle-div absolute bottom-full  mb-[calc(-19%)] text-white flex items-center justify-center"
                                style={{width: '900px', height: '500px'}}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ChatBot/>
                            </div>
                        )}
                    </div>
                </div>

            </div>


            {/* Mid AI text */}
            <div
                className="mid-ai-text-area main-color mid-ai-text-area-res w-full flex custom-height-60vh justify-center items-center ">
                <div
                    className="ai-text-left ai-text-left-res flex  px-10 bg justify-end items-start custom-width-25   h-full">
                    <div className="w-12 h-48 arrow-res  flex items-start justify-end ">
                        <img src={arrow} alt="Arrow" ref={ref} style={{mixBlendMode: 'color-burn'}}
                             className={`transition-opacity animate__animated ${isVisible ? 'animate__slideInUp animate__slower' : ''}`}/>
                    </div>
                </div>
                <div
                    className="ai-mid-left ai-mid-text custom-width-50 h-full flex justify-center  items-start px-4 sm:px-0"
                    ref={ref}
                >
                    <p className={`tracking-wider transition-opacity animate__animated ${isVisible ? 'animate__slideInUp animate__slow' : ''}`}>
                        <span>AI Dev </span> aims to provide an AI ecosystem for crypto users, all accessible through
                        the convenience
                        of a Telegram account. Effortlessly create stunning websites with AI image generation, just a
                        few clicks, deploy smart contracts on multiple chains, and utilize
                        the <span>EXCLUSIVE</span> Sniper Bot,
                        Enjoy its features such as a seamless wallet tracker, Copy trading from Telegram channels and
                        much More!
                    </p>
                </div>
                <div className="ai-right-right mid-a-text-right-res custom-width-25 h-full"></div>
            </div>

            {/* Test carousel section */}
            <div
                className="owl-section w-full custom-height-px-600   flex justify-center items-center overflow-x-hidden">
                <div className="owl-section-width-res w-9/12 h-full flex justify-center items-center" ref={section1Ref}>
                    <Test/>
                </div>
            </div>


            <div
                className={"marquee-text-area custom-height-70 bg-gray-500 w-full mai flex flex-col justify-center items-center"}>

                <marquee className="custom-marquee" behavior="scroll" width="100%" direction="left" height="250px"
                         scrollamount="15">
                    <h1 style={{display: "inline-block", marginRight: "50px"}}> Website AI x Sniper AI x Token Deployer
                        x AI face Swap x Voice
                        AI x
                        MEME Generator x Uncensored AI</h1>
                    <h2 style={{display: "inline-block"}}> Website AI x Sniper AI x Token Deployer x AI face Swap x
                        Voice
                        AI x
                        MEME Generator x Uncensored AI</h2>
                </marquee>
                <marquee className="custom-marquee" behavior="scroll" width="100%" direction="right" height="   250px"
                         scrollamount="15">
                    <h2 style={{display: "inline-block", marginRight: "50px"}}> Website AI x Sniper AI x Token Deployer
                        x AI face Swap x Voice
                        AI x
                        MEME Generator x Uncensored AI</h2>
                    <h1 style={{display: "inline-block"}}> Website AI x Sniper AI x Token Deployer x AI face Swap x
                        Voice
                        AI x
                        MEME Generator x Uncensored AI</h1>
                </marquee>


            </div>
            <div className="inverted-border grey-color-bg custom-height-80  w-full bg-gray-800" ref={section2Ref}>
                <DevBotGifSection/>
            </div>

            {/* Example horizontal scrolling section */}

            <Example/>

            {/*below gallery section*/}

            <div className={"custom-height-px-2000 grey-color-bg below-gallery-section-height-res  w-full bg-gray-500"}
                 ref={section3Ref}>
                <BelowGallerySection/>

            </div>
            <div
                className={"tier-section-height-res light-grey-color-bg h-auto  w-full bg-gray-800 py-10 flex justify-center items-center"}>
                <TierSection/>
            </div>

            <div
                className={"lower-tier-section-res light-grey-color-bg h-36 w-full bg-gray-800 flex justify-center items-center"}>
                <LowerTierSection/>
            </div>
            <div className={"roadmap-height-res light-black-color-bg custom-height-px-700  w-full px-3 bg-gray-500"}>
                <RoadmapSlider/>
            </div>
            <div className={"tokonomics-height-res custom-height-90 w-full light-black-color-bg"}>

                <Tokonomics/>

            </div>
            <div className={"research-and-development-res main-color custom-height-px-1100 w-full bg-gray-400"}>
                <ResearchAndDevelopment/>
            </div>
            <div className={"custom-height-px-700 main-color animated-button-height-res w-full bg-white "}
                 ref={section4Ref}>
                <AnimatedButton/>

            </div>
            <div className={"trade-height-res main-color h-screen bg-gray-400 h-screen "} ref={section5Ref}>

                <Trade/>
            </div>


        </div>
    );
};

export default MainScreen;
