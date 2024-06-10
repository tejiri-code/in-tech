import { useState, useEffect } from "react";

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const closeDropdown = () => {
        setDropdownOpen(false);
    };
    return (
        <div className="bg-white px-6  bg-opacity-20 py-6 justify-between flex drop-shadow-lg sticky  md:flex-row">
            <div className="flex items-center text-3xl font-bold  md:px-16"> IN <span className="text-[#F2BE09]">Tech</span></div>
            <div className=" hidden lg:flex items-center justify-center md:justify-end text-[#393939] font-light gap-5 py-4 px-10 md:px-16">
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Products</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">About</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Partners</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Pricing</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Support</div>
                <button className="hidden md:inline-block px-4 font-normal text-[#F2BE09]">Login</button>
                <button className="px-4 bg-[#F2BE09] font-normal text-[#fff] rounded-lg py-1">Sign Up</button>
            </div>
            <div className="lg:hidden ">
                <button
                    onClick={toggleDropdown}
                    className="text-[#F2BE09] focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className="lg:hidden absolute z-10 top-0 left-0 w-4/5 min-h-screen bg-[#000] text-white shadow-md p-4">
                        <div className="flex text-white flex-col space-y-6">
                            <div onClick={closeDropdown} className="mx-4 hover:border-[#F2BE09] hover:border-b">Products</div>
                            <div onClick={closeDropdown} className="mx-4 hover:border-[#F2BE09] hover:border-b">About</div>
                            <div onClick={closeDropdown} className="mx-4 hover:border-[#F2BE09] hover:border-b">Partners</div>
                            <div onClick={closeDropdown} className="mx-4 hover:border-[#F2BE09] hover:border-b">Pricing</div>
                            <div onClick={closeDropdown} className="mx-4 hover:border-[#F2BE09] hover:border-b">Support</div>
                            <button onClick={closeDropdown} className=" mx-4 font-normal text-[#F2BE09]">Login</button>
                            <button onClick={closeDropdown} className="px-1 bg-[#F2BE09] font-normal text-[#fff] rounded-lg py-1">Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
