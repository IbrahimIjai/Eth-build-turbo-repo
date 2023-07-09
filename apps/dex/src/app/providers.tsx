/** @format */

"use client";

// import * as React from "react";
import { useState, useEffect } from "react";
import {
	RainbowKitProvider,
	getDefaultWallets,
	connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
	injectedWallet,
	walletConnectWallet,
	metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider, webSocketProvider } = configureChains(
	[bsc, bscTestnet],
	[publicProvider()]
  );
const projectId = "3m";

const connectors = connectorsForWallets([
	{
		groupName: "Recommended",
		wallets: [
			injectedWallet({ chains }),
			metaMaskWallet({ projectId, chains }),
			walletConnectWallet({ projectId, chains }),
		],
	},
]);

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
	webSocketProvider,
  });

export function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				{mounted && children}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
