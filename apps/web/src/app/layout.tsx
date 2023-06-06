/** @format */

import "../styles/globals.css";
// include styles from the ui package
import { Providers } from "./provider";
import "ui/styles.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-black overflow-x-hidden w-screen ">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer/>
				</Providers>
			</body>
		</html>
	);
}
