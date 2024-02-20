'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';
import { GlobalStateContext, GlobalStateProvider } from 'app/context';
import { useContext } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const context = useContext(GlobalStateContext);
  return (
    <GlobalStateProvider>
      <html lang='en' className={context.darkMode ? 'dark' : ''}>
        <body className={montserrat.className}>{children}</body>
      </html>
    </GlobalStateProvider>
  );
}
