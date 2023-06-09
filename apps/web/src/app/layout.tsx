"use client"
import "../styles/globals.css";
import { motion, sync, useCycle } from "framer-motion";
import { Providers } from "./provider";
import "ui/styles.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Siebar from "../components/sidebar";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const [isOpen, toggleOpen] = useCycle(false, true);
	
	return (
		<html lang="en" className="bg-gray-900 overflow-x-hidden w-screen ">
			<body>
				<Providers>
					<Navbar toggle={() => toggleOpen()}/>
					{children}
					<Footer/>
				</Providers>
			</body>
		</html>
	);
}
