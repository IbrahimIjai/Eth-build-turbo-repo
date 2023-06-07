/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const tabs = ["My NFTs", "Created collection", "Transactions", ""];
export default function Profile() {
	const [selected, setSelectedTab] = useState(tabs[0]);
	console.log(selected);

	return (
		<div className="mt-[15vh] w-screen min-h-[60vh] px-[2.5rem]">
			<div className="flex border-b-[1px] border-gray-500 mt-[5vh] items-start gap-4">
				{tabs.map((item, i) => {
					return (
						<div
							onClick={() => {
								setSelectedTab(item);
							}}
							className="cursor-pointer text-white relative flex flex-col gap-1"
							key={i}>
							<p>{item}</p>
							{item == selected && (
								<div className="bg-primary h-[2px]"></div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
