import React from 'react';
import Footnotes from "@/app/components/Footnotes";
import Socialmedia from "@/app/components/Socialmedia";
import Disclaimer from "@/app/components/Disclaimer";
import Footlinks from "@/app/components/Footlinks";

const Footer = () => {
    return (
        <>
            <div>
                <div>
                    <Footnotes/>
                    <div>
                        <Footlinks/>
                        <Socialmedia/>
                    </div>
                </div>
                <Disclaimer/>
            </div>
        </>
    );
};

export default Footer;