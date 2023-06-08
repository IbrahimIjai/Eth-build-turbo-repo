/** @format */

import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import images from "../../components/img";
const Service = () => {
	const serviceArr = [
		{
			imgUrl: images.service2,
			step: "Step 1",
			head: "Filter & Discover",
			text: "Browser through wonderful arts from great creators, and Artificial inteligence.",
		},
		{
			imgUrl: images.service3,
			step: "Step 2",
			head: "Connect Wallet",
			text: "Connect with wallet, discover, buy NTFs, sell your NFTs and passive income",
		},
		{
			imgUrl: images.service2,
			step: "Step 3",
			head: "Start trading",
			text: "Trade great NFT Collections and enjoy all the benefits of being a holder",
		},
	];

	return (
		<div className="w-[90%] mx-auto my-[3rem]">
			<div className=" grid grid-cols-3 items-center gap-4">
				{serviceArr.map((service, i) => {
					return (
						<div
							key={i}
							className="gap-2 p-2 cursor-pointer flex flex-col py-4 items-center hover:border-[.5px] border-yellow-900 hover:shadow-lg hover:shadow-gray-700 rounded-lg">
							<div className="relative h-[50px] lg:h-[100px] w-[50px] lg:w-[100px]">
								<Image
									src={service.imgUrl}
									alt="Filter & Discover"
									fill
									style={{ objectFit: "contain" }}
								/>
							</div>
							<p className="bg-primary rounded-lg p-1 lg:p-3 font-semibold text-[.7rem] lg:text-[1rem]">
								{service.step}
							</p>
							<h3 className="text-gray-300 whitespace-nowrap font-bold text-[.7rem] lg:text-[1.2rem]">{service.head}</h3>
							<p className="w-[100%] lg:w-[75%] text-[.65rem] lg:text-[.9rem] text-yellow-300 text-center">
								{service.text}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Service;
