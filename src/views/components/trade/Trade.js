import React from 'react';
import arrow from '../../../images/arrow3.png';
import logo from '../../../images/logo.png';
import social1 from '../../../images/social-01.png';
import social2 from '../../../images/social-02.png';
import social3 from '../../../images/social-03.png';
import social4 from '../../../images/social-04.png';
import social5 from '../../../images/social-05.png';
import social6 from '../../../images/social-06.png';
const Trade = () => {
    return (
        <div className={" h-full w-full py-5"}>
            {/*first part marquee*/}

            <div className={"trade-marquee-area  h-1/2 w-full flex justify-center items-center"}>
                <div className={"marquee-text-area w-full flex flex-col justify-center items-center relative"}>

                    <marquee className={"custom-marquee"} width="100%" direction="left" height="225px"
                             scrollamount="20">
                        <h1> Website AI x Sniper AI x Token
                            Deployer
                            x AI face Swap x Voice
                            AI x
                            MEME Generator x Uncensored AI</h1>
                    </marquee>

                    <img src={arrow} alt="" className={"rotating-image absolute h-[60%] w-auto top-[45px]"}
                         style={{height: "400px", mixBlendMode: 'multiply'}}/>

                    <marquee className={"custom-marquee"} width="100%" direction="right" height="225px"
                             scrollamount="20">
                        <h1> Website AI x Sniper AI x Token
                            Deployer
                            x AI face Swap x Voice
                            AI x
                            MEME Generator x Uncensored AI</h1>
                    </marquee>
                </div>
            </div>


            {/*second part*/}

            <div className={"h-1/2 w-full"}>
                <div className={"h-[60%] w-full"}>
                    <div className={"h-[30%] w-full   flex justify-between items-center"}>
                        <div className={"trade-logo-width h-[80%]  w-[20%] flex justify-center"}>
                            <div className={"h-full w-[60%] flex justify-center items-center"}>
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                        <div className={"social-icons-width h-[80%]  gap-3 w-[35%] flex justify-center items-center"}>
                            <div className={"h-full w-[80%] flex justify-between items-center"}>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social1} alt="" className={"h-full"}/>
                                </div>
                                <div className={" icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social2} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social3} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social4} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social5} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social6} alt="" className={"h-full"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"trade-section-last-border h-[70%] w-full  flex justify-between "}>
                        <div className={"trade-section-last-width h-[75%] w-[60%]  flex justify-between"}>

                        </div>
                        <div className={"trade-last-contact h-[75%] w-[33%]  flex flex-col justify-evenly items-center"}>
                                <h1 className={"trade-contact-sec text-center w-[70%] justify-end"}>You can email <u className={"hover:cursor-pointer"}>support@dev.ai</u> to provide feedback for support requests.</h1>
                            <p className={"text-start px-4 w-full"}><u>Acceptable Use
                                Policy</u> <u>Cookie
                                Policy</u> <u>Privacy Policy</u> <u>Terms of
                                Service</u></p>

                        </div>
                    </div>
                </div>
                <div className={"h-[40%] w-full px-5"}>
                    <h1 className={"copyright-text pt-4 text-2xl"}>© DEV AI 2024</h1>
                </div>
            </div>
        </div>
    );
};

export default Trade;
