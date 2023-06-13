/** @format */

"use client";
import { motion } from "framer-motion";
import RecentColCard from "../../components/RecentColCard";
import { FollowingArray } from "../../modules/homepage/RecentCollection";
export default function NFTId() {
	return (
		<div className="px-[2.5rem] mt-[11vh]">
			<div>
				<p>Here is a List of all collection in the market place</p>
			</div>

			<div className="w-full flex items-center justify-end my-12">
				<button className="p-1 bg-primary rounded-lg text-center active:scale-95 transition duration-75  text-black text-bold">
					See your collections
				</button>
			</div>

			<motion.div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
				{FollowingArray.map((el, i) => (
					<RecentColCard key={i + 1} el={el} i={i} />
				))}
			</motion.div>
		</div>
	);
}
