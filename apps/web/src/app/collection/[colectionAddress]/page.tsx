/** @format */

import images from "../../../components/img";
import ListCard from "../../../components/NFTCard";
import Image from "next/image";
export default function NFTId() {
	return (
		<div>
			<div>
				<p>collection contract: 0x30k0kd0okrd00kdf0k30k0k0</p>
			</div>
			<div className="relative w-[150x] h-[150px] overflow-hidden rounded-[50%]">
				<Image
					src={images.nft_image_2}
					fill
					style={{ objectFit: "contain" }}
					alt="an Image"
				/>
			</div>
			<div>
				<p>
					Vixen Punks is a collection of 2,222 unique Vixen Punk NFTs — unique
					digital collectibles living on the KCC blockchain. Your Vixen is an
					open invitation into an unfolding Metaverse and grants access to
					benefits within the world.
				</p>
			</div>
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
					return (
						<ListCard
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
