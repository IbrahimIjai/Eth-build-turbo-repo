
"use client"
import { motion } from "framer-motion";
import RecentColCard from "../../components/RecentColCard";
import { FollowingArray } from "../../modules/homepage/RecentCollection";
export default function NFTId() {
	return (
		<div className="px-[2.5rem] mt-[11vh]">
			<div>
				<p>Here is a List of all collection in the market place</p>
			</div>
			
			<motion.div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{FollowingArray.map((el, i) => (
					<RecentColCard key={i + 1} el={el} i={i} />
				))}
			</motion.div>
		</div>
	);
}
