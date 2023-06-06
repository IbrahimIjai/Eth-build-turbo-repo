/** @format */

"use client";
import Link from "next/link";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { RxDropdownMenu } from "react-icons/rx";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export default function Navbar() {

	const routLink = [
		{
			name: "Create",
			route: "/create",
		},
		{
			name: "Discover",
			route: "/discover",
		},
		{
			name: "Profile",
			route: "/profile",
		},
	];

	const pathname = usePathname();
	return (
		<div className="w-screen z-10 bg-black flex items-center fixed top-0 right-0 left-0 justify-between px-6 py-4 border-b-[.8px] border-[#ffdf2b57]">
			<div className="text-gray-300 flex items-center gap-3">
				<div className="flex lg:hidden">
					<RxDropdownMenu size={25}/>
				</div>
				<Logo />
			</div>
			<div className="hidden lg:flex items-center gap-2">
				{routLink.map((route, i) => {
					return (
						<Link
							key={i}
							className={`${pathname == route.route && "border"}`}
							href={route.route}>
							<p className="text-primary">{route.name}</p>
						</Link>
					);
				})}
			</div>
			<ConnectButton />
		</div>
	);
}
