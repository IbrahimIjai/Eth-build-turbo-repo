/** @format */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const RecentColCard = ({ el, i }) => {
	return (
		<motion.div className="relative cursor-pointer">
			<div className="transition text-gray-300 duration-500 rounded-8 pb-1 hover:shadow-lg border border-yellow-900 hover:border-primary  rounded-lg shadow-primary">
				<motion.div className="overflow-hidden rounded-lg relative w-full h-[100px] lg:h-[180px]">
					<Image
						src={el.background}
						alt="slider profile"
						className="hover:scale-110 transition duration-120 ease-in-out"
						fill
						style={{ objectFit: "cover" }}
					/>
				</motion.div>
				<div className="flex items-center text-[.7rem] p-1 justify-between gap-2">
					<p>NFT Video #{i + 1}</p>
					<div className="flex items-center gap-2">
						<small>{i + 4} 0f 100</small>
					</div>
				</div>

				<div className="flex justify-between p-2 mt-2 text-end">
					<div className="bg-primary text-black flex flex-col items-center justify-center p-1 text-[.7rem] rounded-lg ">
						<small className="whitespace-nowrap font-bold ">Floor price</small>
						<p className="whitespace-nowrap text-[.4rem]">{i + 2}.000 ETH</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default RecentColCard;
