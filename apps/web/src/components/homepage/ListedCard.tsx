/** @format */

import Image from "next/image";
import { Tilt } from "react-tilt";

// interface props {
// 	nftName: string;
// 	price: string;
// 	imgUrl: any;
// }

export default function ListCard({ card }) {
	return (
		<Tilt
			options={{
				max: 25,
				scale: 1,
				speed: 230,
			}}>
			<div className="flex flex-col gap-2 justify-between cursor-pointer  border border-yellow-900 text-white rounded-xl">
				<div className="overflow-hidden rounded-lg relative w-[90px] md:w-[120px] lg:w-[220px] h-[80px] lg:h-[160px]">
					<Image
						className="hover:scale-105 transition duration-100 ease-in"
						src={card.imgUrl}
						fill
						style={{ objectFit: "cover" }}
						alt="an Nft image"
					/>
				</div>
				<div className="flex items-center text-[.6rem] w-full justify-between">
					<p className="">{card.nftName}</p>
					<p className="">{card.price}</p>
				</div>
				<button className="rounded-lg  text-[.6rem] lg:text-[1rem] w-ful bg-primary text-black font-semibold">
					Buy Now
				</button>
			</div>
		</Tilt>
	);
}
