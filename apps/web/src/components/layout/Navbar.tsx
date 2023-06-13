/** @format */

"use client";
import Link from "next/link";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const routLink = [
	{
		name: "Create Nft",
		route: "/create",
	},
	{
		name: "Collection",
		route: "/collection",
	},
	{
		name: "Market",
		route: "/market",
	},
	{
		name: "Profile",
		route: "/profile",
	},
	{
		name: "Stake NFT",
		route: "/staking",
	},
];
export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="w-screen z-10 bg-gray-900 fixed top-0 right-0 left-0  border-b-[.8px] border-[#ffdf2b57]">
			<div className="flex items-center justify-between pl-12 lg:pl-0  w-full px-2 py-4 ">
				<Logo />
				<div className="hidden lg:flex items-center gap-2">
					{routLink.map((route, i) => {
						return (
							<Link
								key={i}
								className={`text-primary font-semibold p-2 mx-2 rounded-lg shadow-md shadow-black first-letter 
								${pathname == route.route && "border border-primary"}`}
								href={route.route}>
								<p className="">{route.name}</p>
							</Link>
						);
					})}
				</div>
				<ConnectButton />
			</div>
		</div>
	);
}
