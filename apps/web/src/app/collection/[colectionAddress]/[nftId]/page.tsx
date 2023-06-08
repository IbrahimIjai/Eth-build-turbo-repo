/** @format */

"use client";

import Image from "next/image";
import images from "../../../../components/img";
export default function NFTId() {
	return (
		<div className="my-[15vh] w-screen px-[2.5rem] text-gray-300">
			<div className="mx-auto">
				<p>Collection Name</p>
				<p>Token Id</p>
			</div>
			<div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
				<div className="relative w-[200px] lg:w-[390px] h-[250px] lg:h-[470px] overflow-hidden rounded-lg">
					<Image
						className="hover:scale-105 transition duration-1000 ease-in-out"
						src={images.nft_image_2}
						fill
						style={{ objectFit: "cover" }}
						alt="an Image"
					/>
				</div>
				<div>
					<p>Price</p>
					<button className="lg:text-[1.5rem] bg-primary p-2 text-black rounded shadow-lg hover:scale-110 transition duration-1000 ease-in-out">
						BUY/LIST
					</button>
				</div>
			</div>
		</div>
	);
}
