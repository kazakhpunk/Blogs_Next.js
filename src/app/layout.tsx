import Navbar from './components/layout/navbar.jsx';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: ReactNode;
  }

export default function RootLayout({children}: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={inter.className}> 
				<Navbar />
				{children}
			</body>
		</html>
	);
}
