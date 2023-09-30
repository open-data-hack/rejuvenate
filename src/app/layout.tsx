import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { AppWrapper } from '../context/state';

import ChakraProviders from '@/providers/chakra-provider';
import { DataverseProvider } from '@/context/dataverse';
// import {
//   ConnectKitProvider,
//   ConnectKitButton,
//   getDefaultConfig,
// } from "connectkit";

// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: process.env.ALCHEMY_ID, // or infuraId
//     walletConnectProjectId: "",

//     // Required
//     appName: "Your App Name",

//     // Optional
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   })
// );

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Rejuvenate AI',
  description: 'We Empower Everyone, Everywhere To LIVE BETTER, LONGER',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <WagmiConfig config={config}>
      <ConnectKitProvider> */}

      <AppWrapper>
        {/* <DataverseProvider> */}
        <ChakraProviders>
          {/* <DataverseProvider></DataverseProvider> */}

          <body className={poppins.className}>{children}</body>
        </ChakraProviders>
        {/* </DataverseProvider> */}
      </AppWrapper>

      {/* </ConnectKitProvider>
    </WagmiConfig> */}
    </html>
  );
}
