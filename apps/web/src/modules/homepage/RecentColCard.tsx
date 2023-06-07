/** @format */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SliderCard = ({ el, i }) => {
	return (
		<motion.div className="p-4">
			<div className="transition text-gray-300 duration-500 rounded-8 pb-1 hover:shadow-lg border border-yellow-900 hover:border-primary  rounded-lg shadow-primary">
				<motion.div className="overflow-hidden rounded-lg relative w-[150px] lg:w-[380px] h-[100px] lg:h-[180px]">
					<Image
						src={el.background}
						alt="slider profile"
						className="hover:scale-105 transition duration-100 ease-in"
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
						<small className="whitespace-nowrap font-bold ">Mint price</small>
						<p className="whitespace-nowrap text-[1.2rem]">{i + 2}.000 ETH</p>
					</div>

					<div className="text-[.65rem] whitespace-nowrap lg:text-[1.3rem] font-semibold">
						<small>Reaming time</small>
						<p className="">
							{i + 1}h : 15m : {i + 4}0s
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default SliderCard;
