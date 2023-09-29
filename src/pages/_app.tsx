"use client";
import "./globals.css";
import { useEffect } from "react";
import Header from "@/components/header";
import type { AppProps } from "next/app";
import Hero from "@/components/hero"
import WhatWeDo from "@/components/what-we-do";
import WorkWithUs from "@/components/work-with-us";
import TalkToNutritionist from "@/components/talk-to-nutritionist"
import CTA from "@/components/cta"
import Footer from "@/components/footer";
import { DataverseProvider } from "@/context/dataverse";
//import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import RootLayout from "./layout";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, celoAlfajores, avalancheFuji, auroraTestnet, arbitrumGoerli } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    goerli,
    arbitrumGoerli,
    avalancheFuji,
    auroraTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()],
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;


const { connectors } = getDefaultWallets({
  appName: "RejuvenateAI",
  projectId: projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <RootLayout>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} modalSize="compact">
    {/*<DataverseProvider>*/ }
    
            
            <Component {...pageProps} />
            

            

    {/*</DataverseProvider>*/}
    </RainbowKitProvider>
  </WagmiConfig>
  </RootLayout>
  </>
    
   
  );
};

export default App;