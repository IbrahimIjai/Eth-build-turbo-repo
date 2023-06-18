/** @format */

import Image from "next/image";
import { Tilt } from "react-tilt";

import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
	useWaitForTransaction,
} from "wagmi";

export default function NFTCard({ card }) {
	return (
		<Tilt
			className="flex flex-col justify-between cursor-pointer w-full  border border-yellow-900 text-white rounded-xl"
			options={{
				max: 25,
				scale: 1,
				speed: 180,
			}}>
			<div className="overflow-hidden  rounded-lg relative w-full h-[80px] lg:h-[160px]">
				<Image
					className="hover:scale-105 transition duration-100 ease-in"
					src={card.imgUrl}
					fill
					style={{ objectFit: "cover" }}
					alt="an Nft image"
				/>
			</div>
			<div className="flex flex-col lg:flex-row items-center text-[.6rem] md:text-[.75rem] w-full justify-between">
				<p className="">{card.nftName}</p>
				<p className="">{card.price}</p>
			</div>
			<button className="rounded-lg  text-[.6rem] lg:text-[1rem] w-full bg-primary text-black font-semibold">
				Buy Now
			</button>
		</Tilt>
	);
}
