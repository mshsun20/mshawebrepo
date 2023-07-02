import React from 'react';
import Hero from "@/app/components/Hero";
import Portfolio from "@/app/components/Portfolio";
import Service from "@/app/components/Service";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import Enquiry from "@/app/components/Enquiry";

const Page = () => {
    return (
        <>
            <div>
                <Hero/>
                <Portfolio/>
                <Service/>
                <Features/>
                <Testimonials/>
                <Enquiry/>
            </div>
        </>
    );
};

export default Page;