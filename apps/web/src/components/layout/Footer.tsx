/** @format */

import Logo from "../logo";
import Link from "next/link";

export default function Footer() {
	const footerArr = [
		{
			title: "ABOUT",
			items: [
				{
					name: "Contact",
					route: "/docs",
				},
				{
					name: "Brand",
					route: "/docs",
				},
				{
					name: "Blog",
					route: "/docs",
				},
				{
					name: "Community",
					route: "/docs",
				},
				{
					name: "Whitepaper",
					route: "/docs",
				},
				{
					name: "Terms of use",
					route: "/docs",
				},
			],
		},
		{
			title: "HELP",
			items: [
				{
					name: "Customer support",
					route: "/docs",
				},
				{
					name: "Troubleshooting",
					route: "/docs",
				},
				{
					name: "Guides",
					route: "/docs",
				},
			],
		},
		{
			title: "DEVELOPERS",
			items: [
				{
					name: "Github",
					route: "/docs",
				},
				{
					name: "Documentation",
					route: "/docs",
				},
				{
					name: "Bug bounty",
					route: "/docs",
				},
				{
					name: "Audit",
					route: "/docs",
				},
				{
					name: "Career",
					route: "/docs",
				},
			],
		},
	];

	return (
		<div className="w-screen border-t-[.5px] border-yellow-900 pt-4 px-8 lg:px-[4rem] mb-4 gap-4 flex flex-col  lg:grid grid-cols-4">
			<div className="text-gray-500 grid grid-cols-2 md:grid-cols-3 gap-4 lg:col-span-3">
				{footerArr.map((head, i) => {
					return (
						<div className="flex flex-col items-start" key={i}>
							<p className="text-primary font-semibold ">{head.title}</p>
							<div className="flex flex-col items-start">
								{head.items.map((item, i) => {
									return (
										<Link href={item.route} key={i}>
											<p>{item.name}</p>
										</Link>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<div className="col-span-1">
				<Logo />
			</div>
		</div>
	);
}
