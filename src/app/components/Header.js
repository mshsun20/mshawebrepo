import React from 'react';
import Toplink from "@/app/components/Toplink";
import Navbar from "@/app/components/Navbar";

const Header = () => {
    return (
        <>
            <div>
                <Toplink/>
                <Navbar/>
            </div>
        </>
    );
};

export default Header;