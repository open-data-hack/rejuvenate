import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { AppWrapper } from '../context/state';

import ChakraProviders from "@/providers/chakra-provider";

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
    <html lang="en">
      <AppWrapper>
        <ChakraProviders>
        <body className={poppins.className}>{children}</body>
        </ChakraProviders>
      </AppWrapper>
    </html>
  );
}
