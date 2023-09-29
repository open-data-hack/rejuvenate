"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero"
import WhatWeDo from "@/components/what-we-do";
import WorkWithUs from "@/components/work-with-us";
import TalkToNutritionist from "@/components/talk-to-nutritionist"
import CTA from "@/components/cta"
import Footer from "@/components/footer";
import { DataverseProvider } from "@/context/dataverse";
import { WagmiConfig, createConfig, useAccount } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: "",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const App = () => {
  return (
     <WagmiConfig config={config}>
        <ConnectKitProvider   customTheme={{
          "--ck-accent-color": "#014421",
          "--ck-connectbutton-background": "#000000",
          "--ck-accent-text-color": "#ffffff",
        }}>
        <DataverseProvider>
          <div className="bg-primaryBeige min-h-screen">
            <div className="px-4 lg:px-8 w-full">
                <Header />
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
        </DataverseProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;