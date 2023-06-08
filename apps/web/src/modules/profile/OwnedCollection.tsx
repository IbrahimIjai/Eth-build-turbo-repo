/** @format */

import React from "react";
import { motion } from "framer-motion";

//INTERNAL IMPORT
// import images from "../../img";
import images from "../../components/img";
import RecentColCard from "../../components/RecentColCard";

const OwnedCollection = () => {
	const FollowingArray = [
		{
			background: images.creatorbackground3,
			user: images.user3,
		},
		{
			background: images.creatorbackground4,
			user: images.user4,
		},
		{
			background: images.creatorbackground5,
			user: images.user5,
		},
		{
			background: images.creatorbackground6,
			user: images.user6,
		},
		{
			background: images.creatorbackground1,
			user: images.user1,
		},
		{
			background: images.creatorbackground2,
			user: images.user2,
		},
	];

	return (
		<div className="w-full text-white">
			<motion.div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{FollowingArray.map((el, i) => (
					<RecentColCard key={i + 1} el={el} i={i} />
				))}
			</motion.div>
		</div>
	);
};

export default OwnedCollection;
