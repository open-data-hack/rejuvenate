"use client"

import Hero from "@/components/hero";
import Header from "@/components/header";
import WhatWeDo from "@/components/what-we-do";
import WorkWithUs from "@/components/work-with-us";
import TalkToNutritionist from "@/components/talk-to-nutritionist";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import type { NextPage } from "next";
//import { ConnectButton } from "@rainbow-me/rainbowkit";
import RootLayout from "./layout";

const Home: NextPage = () => {
  return (
    <>
    <Header />     
    <div className="bg-primaryBeige min-h-screen">
     <div className="px-4 lg:px-8 w-full">
      </div>
      <div className=" h-7 bg-[#EEC438]" />
      <Hero />
     <div className="px-4 lg:px-8">
       <WhatWeDo />
     </div>
      <WorkWithUs />
      <TalkToNutritionist />
      <CTA />
      <Footer />
   </div>

    </>
  );
}

export default Home;