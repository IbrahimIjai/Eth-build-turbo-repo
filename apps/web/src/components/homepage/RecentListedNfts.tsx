
import images from "../img";
import ListCard from "./ListedCard";
interface props {
	nftName: string;
	price: string;
	imgUrl: any;
}
export default function ReecentlyListed() {
	const NftsArr: props[] = [
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

	return (
		<div className="my-8 text-white flex flex-col gap-8 px-[2.5rem]">
			<h1 className="text-2xl">Recently Listed NFTs</h1>
			<div className="w-full flex items-center justify-end ">
				<button className="rounded-lg w-ful bg-primary p-1 text-black font-semibold">See All</button>
			</div>


			<div className="grid grid-cols-2 md:grid-cols-4 lg:cols-5 gap-8 ">
				{NftsArr.map((card, i) => {
					return <ListCard key={i} card={card} />;
				})}
			</div>


		</div>
	);
}
