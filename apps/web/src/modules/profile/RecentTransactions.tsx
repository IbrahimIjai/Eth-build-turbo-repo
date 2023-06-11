/** @format */

interface Transactions {
	type: "Buy" | "Sell" | "Mint" | "Create Collection";
	amountPaid: number;
	amountReceived: number;
	NFTId: number;
	collectionAddress: string;
	timestamp: number;
	transactionHash: string;
}

const transactionsList: Transactions[] = [
	{
		type: "Buy",
		amountPaid: 0.5,
		amountReceived: 1,
		NFTId: 12,
		collectionAddress: "0xf62b92c972e9cf10ae8f3297bdb870a7e6dc3ad0",
		timestamp: 1623015600,
		transactionHash:
			"0xe483def26ea4043d41cba5e25e2983d4c1a5c4b450faef63c045ba33332f8a86",
	},
	{
		type: "Sell",
		amountPaid: 0.2,
		amountReceived: 0.5,
		NFTId: 25,
		collectionAddress: "0xf62b92c972e9cf10ae8f3297bdb870a7e6dc3ad0",
		timestamp: 1623102000,
		transactionHash:
			"0xe483def26ea4043d41cba5e25e2983d4c1a5c4b450faef63c045ba33332f8a86",
	},
	{
		type: "Mint",
		amountPaid: 0.1,
		amountReceived: 0.2,
		NFTId: 4,
		collectionAddress: "0xf62b92c972e9cf10ae8f3297bdb870a7e6dc3ad0",
		timestamp: 1623188400,
		transactionHash:
			"0xe483def26ea4043d41cba5e25e2983d4c1a5c4b450faef63c045ba33332f8a86",
	},
	{
		type: "Mint",
		amountPaid: 0.15,
		amountReceived: 0.3,
		NFTId: 8,
		collectionAddress: "0xf62b92c972e9cf10ae8f3297bdb870a7e6dc3ad0",
		timestamp: 1623274800,
		transactionHash:
			"0xe483def26ea4043d41cba5e25e2983d4c1a5c4b450faef63c045ba33332f8a86",
	},
	{
		type: "Buy",
		amountPaid: 0.3,
		amountReceived: 0.7,
		NFTId: 18,
		collectionAddress: "0xf62b92c972e9cf10ae8f3297bdb870a7e6dc3ad0",
		timestamp: 1623361200,
		transactionHash:
			"0xe483def26ea4043d41cba5e25e2983d4c1a5c4b450faef63c045ba33332f8a86",
	},
];

export default function TransactionsList() {
	return (
		<div className="mt-4 flex flex-col items-center">
			<p>Transactions with Our contract</p>
			<div className="w-full mt-8 px-[5%] lg:px-[10%]">
				{transactionsList.map((trx, i) => {
					return (
						<div
							className={`cusor-pointer border-[.5px] shadow-lg ${
								trx.type === "Buy"
									? "bg-green-400"
									: trx.type == "Mint"
									? "bg-orange-600"
									: "bg-slate-200  text-gray-800"
							} `}
							key={i}>
							<p className={`p-1 `}>{trx.type}</p>
							<div className="flex items-center justify-between">
								<p>{trx.transactionHash.slice(0, 8)}</p>
								<p>{trx.timestamp}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
