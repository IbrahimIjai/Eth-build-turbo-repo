"use client"

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
// import images from "../../img";
import images from "../../components/img";
import RecentColCard from "../../components/RecentColCard";
export const FollowingArray = [
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
const Slider = () => {
	return (
		<div className="w-screen px-[3rem] text-white">
			<p>Here are all your collection minted</p>

			<motion.div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
				{FollowingArray.map((el, i) => (
					<RecentColCard key={i + 1} el={el} i={i} />
				))}
			</motion.div>
		</div>
	);
};

export default Slider;
