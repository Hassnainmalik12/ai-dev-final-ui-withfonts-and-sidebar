import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
        setIsActive1(!isActive1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsActive2(!isActive2);
    };

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
        setIsActive3(!isActive3);
    };

    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
        setIsActive4(!isActive4);
    };

    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
        setIsActive5(!isActive5);
    };

    const dropdownVariants = {
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 }
    };

    return (
        <div className="w-full h-full bg-black p-1">
            <div className={"w-full h-full bg-black px-2"} style={{border:'2px solid white', borderRadius:"10px"}}>
                <div className={"h-12 w-full"}></div>

                {/* First Dropdown */}
                <div className="relative mt-2">
                    <button
                        onClick={toggleDropdown1}
                        className={` flex justify-between items-center p-2 w-full ${isActive1 ? 'text-green' : 'text-white'}`}
                    >
                        01. EXPLORE
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive1 ? 'rotate-180' : ''}`}
                        >
                        ▼
                    </span>
                    </button>
                    <motion.div
                        animate={isOpen1 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute bg-black shadow-md  rounded  w-full "
                        style={{border:"1px solid white"}}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Second Dropdown */}
                <div className="relative mt-2" style={{ marginTop: isOpen1 ? '6rem' : '0' }}>
                    <button
                        onClick={toggleDropdown2}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive2 ? 'text-green' : 'text-white'}`}
                    >
                        02. AI Bots
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive2 ? 'rotate-180' : ''}`}
                        >
                        ▼
                    </span>
                    </button>
                    <motion.div
                        animate={isOpen2 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{duration: 0.3}}
                        className="absolute shadow-md mt-2 rounded  w-full"
                        style={{border:"1px solid white"}}

                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Third Dropdown */}
                <div className="relative mt-2" style={{marginTop: isOpen2 ? '6rem' : '0'}}>
                    <button
                        onClick={toggleDropdown3}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive3 ? 'text-green' : 'text-white'}`}
                    >
                        03. Docs
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive3 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen3 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{duration: 0.3}}
                        className="absolute shadow-md mt-2 rounded  w-full"
                        style={{border:"1px solid white"}}

                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Fourth Dropdown */}
                <div className="relative mt-2" style={{marginTop: isOpen3 ? '6rem' : '0'}}>
                    <button
                        onClick={toggleDropdown4}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive4 ? 'text-green' : 'text-white'}`}
                    >
                        04. Connect
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive4 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen4 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{duration: 0.3}}
                        className="absolute  shadow-md mt-2 rounded w-full"
                        style={{border:"1px solid white"}}

                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Fifth Dropdown */}
                <div className="relative mt-2" style={{marginTop: isOpen4 ? '6rem' : '0'}}>
                    <button
                        onClick={toggleDropdown5}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive5 ? 'text-green' : 'text-white'}`}
                    >
                        05. Trade
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive5 ? 'rotate-180 ' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen5 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{duration: 0.3}}
                        className="absolute  shadow-md mt-2 rounded w-full"
                        style={{border:"1px solid white"}}

                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
