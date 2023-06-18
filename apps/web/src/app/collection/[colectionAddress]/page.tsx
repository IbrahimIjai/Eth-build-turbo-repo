/** @format */

"use client";
import { useState } from "react";
import images from "../../../components/img";
import NFTcard from "../../../components/NFTCard";
import MintNftModal from "../../../components/modals/MintNft";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NFTId() {
	const [isModalOpen, setModalOpen] = useState(false);
	function closeModal() {
		setModalOpen(false);
		console.log("yoooooooooooooooo");
	}

	function openModal() {
		setModalOpen(true);
	}

	return (
		<div className="px-[2rem] mt-[15vh] flex flex-col items-center gap-8">
			<AnimatePresence>
				{isModalOpen && (
					<MintNftModal isModalOpen={isModalOpen} closeModal={closeModal} />
				)}
			</AnimatePresence>

			<div className="flex items-center gap-2 md:gap-6 ">
				<div className="relative w-[90px] md:w-[150px]  h-[90px] md:h-[150px] overflow-hidden rounded-[50%]">
					<Image
						src={images.nft_image_2}
						fill
						style={{ objectFit: "cover" }}
						alt="an Image"
					/>
				</div>
				<div className="text-[.75rem] md:text-[1rem] flex flex-col gap-5 font-semibold text-blue-200">
					<p>collection contract: 0x30k0kd0okrd00kdf0k30k0k0</p>
					<p>Collection Owner: 0x30k0kd0okrd00kdf0k30k0k0</p>
				</div>
			</div>
			<div className="w-full lg:w-[80%] text-center">
				<p>
					Vixen Punks is a collection of 2,222 unique Vixen Punk NFTs — unique
					digital collectibles living on the KCC blockchain. Your Vixen is an
					open invitation into an unfolding Metaverse and grants access to
					benefits within the world.
				</p>
			</div>
			<div className="w-full px-[3rem] flex items-center justify-end my-12">
				<button
					onClick={openModal}
					className="p-1 bg-primary rounded-lg text-center active:scale-95 transition duration-75  text-black text-bold">
					Mint a New NFT
				</button>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-[80%] mb-8">
				{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
					return (
						<NFTcard
							card={{
								imgUrl: images.nft_image_3,
								nftName: "Unknown gun men",
								price: "5000",
							}}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}
