import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { DataProvider } from './context/dataProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE ?? "Create Next App",
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "This is the little description about app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          {children}
          <p className="fixed bottom-0 right-0 p-4 text-center bg-gray-800 text-white"> Build Using Rudra</p>
        </DataProvider>
      </body>
    </html>
  );
}
