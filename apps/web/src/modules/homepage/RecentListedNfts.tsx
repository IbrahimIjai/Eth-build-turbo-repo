"use client"
import images from "../../components/img";
import NFTCard from "../../components/NFTCard";
interface props {
	nftName: string;
	price: string;
	imgUrl: any;
}
export const NftsArr: props[] = [
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_1,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_3,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_3,
	},
	{
		nftName: "Angrybird",
		price: "20WHIZ",
		imgUrl: images.nft_image_2,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_2,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_2,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_3,
	},
	{
		nftName: "Angrybird",
		price: "20 WHIZ",
		imgUrl: images.nft_image_3,
	},
];
export default function ReecentlyListed() {
	

	return (
		<div className="my-8 text-white w-screen flex flex-col gap-8 px-[2.5rem]">
			<h1 className="text-2xl">Recently Listed NFTs</h1>
			<div className="w-full flex items-center justify-end ">
				<button className="rounded-lg w-ful bg-primary p-1 text-black font-semibold">See All</button>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 lg:cols-5 gap-8 ">
				{NftsArr.map((card, i) => {
					return <NFTCard key={i} card={card} />;
				})}
			</div>


		</div>
	);
}
