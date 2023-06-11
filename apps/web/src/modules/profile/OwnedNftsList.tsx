/** @format */

import ListCard from "../../components/NFTCard";
import { NftsArr } from "../homepage/RecentListedNfts";
export default function OwnedNfts() {
	return (
		<>
			<p>Here is a list of all NFTs you owned.</p>
			<div className="grid mt-8 w-full items-center justify-center grid-cols-2 md:grid-cols-4 lg:cols-5 gap-8 ">
				{NftsArr.map((card, i) => {
					return <ListCard key={i} card={card} />;
				})}
			</div>
		</>
	);
}
