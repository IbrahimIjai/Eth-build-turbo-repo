/** @format */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import images from "../img";
import SliderCard from "./RecentColCard";

const Slider = () => {
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
	const [width, setWidth] = useState(0);
	const dragSlider = useRef(null);

	useEffect(() => {
		setWidth(dragSlider.current?.scrollWidth - dragSlider.current?.offsetWidth);
	}, [dragSlider.current]);

	const handleScroll = (direction: string) => {
		const { current } = dragSlider;
		console.log(dragSlider.current.scrollLeft)
		const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
		
		if (direction == "left") {
			dragSlider.current.scrollLeft -= scrollAmount;
		} else {
			dragSlider.current.scrollLeft += scrollAmount;
		}
	};

	return (
		<div className="w-screen text-white">
			<div className="w-[90%]  mx-auto pr-[-1rem] pb-8">
				<h2 className="text-[1.2rem] font-bold">See recently created collection</h2>
				<div className="flex mt-8 justify-between items-center">
					<p className="lg:text-[1.5rem] text-gray-300">Click on play icon & enjoy Nfts Video</p>
					<div className="flex gap-4 text-primary text-[2rem] items-center">
						<div
							className="border border-primary p-1 lg:p-3 rounded-[50%] cursor-pointer transition duration-500 ease-in items-center flex "
							onClick={() => handleScroll("left")}>
							<TiArrowLeftThick />
						</div>
						<div
							className="border border-primary p-1 lg:p-3 rounded-[50%] cursor-pointer transition duration-500 ease-in items-center flex "
							onClick={() => handleScroll("right")}>
							<TiArrowRightThick />
						</div>
					</div>
				</div>

				<motion.div ref={dragSlider} className="w-full overflow-hidden">
					<motion.div 
						className="flex  items-center "
						drag="x"
						dragConstraints={{ right: 0, left: -width }}>
						{FollowingArray.map((el, i) => (
							<SliderCard key={i + 1} el={el} i={i} />
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Slider;
