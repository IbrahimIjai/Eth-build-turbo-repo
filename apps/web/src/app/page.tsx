"use client";

import { Metadata } from "next";
import Slider from "../modules/homepage/RecentCollection";
import Service from "../modules/homepage/Service";
import ReecentlyListed from "../modules/homepage/RecentListedNfts";
export const metadata: Metadata = {
	title: "Web - Turborepo Example",
};

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center py-2">
			<main className="mx-auto h-[40vh] lg:h-[60vh]  w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8 flex flex-col items-center justify-center gap-4">
				<h1 className="mx-auto text-center text-xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-4xl">
					Discover, collect, and sell NFTs 🖼️
				</h1>
				<p className="text-gray-500 lg:text-[1.2rem]">
					Discover the most outstanding NTFs in all topics of life. Creative
					your NTFs and sell them
				</p>
				<div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
					<button
						className="ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-md ui-border ui-border-transparent ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-no-underline ui-bg-white ui-text-black hover:ui-bg-gray-300 md:ui-py-3 md:ui-px-10 md:ui-text-lg md:ui-leading-6"
						onClick={() => {}}>
						Start your search
					</button>
				</div>

				
			</main>
			<Service/>
			<ReecentlyListed/>
			<Slider/>
		</div>
	);
}
