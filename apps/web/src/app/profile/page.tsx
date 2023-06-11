/** @format */

"use client";

import OwnedNfts from "../../modules/profile/OwnedNftsList";
import TransactionsList from "../../modules/profile/RecentTransactions";
import OwnedCollection from "../../modules/profile/OwnedCollection";

import ProfileNavs from "../../modules/profile/Navs";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const tabs = [
	{ label: "My NFTs", component: <OwnedNfts /> },
	{ label: "Created collection", component: <OwnedCollection /> },
	{ label: "Transactions", component: <TransactionsList /> },
];
export default function Profile() {
	const [selected, setSelectedTab] = useState(tabs[0]);
	console.log(selected);

	return (
		<div className="mt-[15vh] w-screen min-h-[60vh] px-[2.5rem]">
			<div className="flex flex-col w-full border-b-[1px] border-gray-500 mt-[5vh] items-start gap-4">
				<ProfileNavs tabs={tabs} selected={selected} setSelectedTab={setSelectedTab}/>
				<AnimatePresence mode="wait">
					<motion.div
						key={selected ? selected.label : "empty"}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
						 className="w-full my-8">
						{selected && selected.component}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
