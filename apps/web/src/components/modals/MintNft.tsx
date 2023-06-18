/** @format */

import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../../hooks/UseMediaQuery";
import MintNftForm from "./utils/Mintform";
import { useEffect, useRef } from "react";

import { RiPriceTag3Line } from "react-icons/ri";

export default function MintNftModal({ closeModal, isModalOpen }) {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	console.log(isDesktop);

	const closeContainer = useRef(null);
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (
				isModalOpen &&
				closeContainer.current &&
				!closeContainer.current.contains(e.target)
			) {
				closeModal();
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [isModalOpen]);

	return (
		<motion.div
			key="MintNftModal"
			initial={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
			animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
			exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
			transition={{ duration: 0.4 }}
			// onClick={closeModal}
			className="fixed flex items-center justify-end lg:justify-center z-30 inset-0 w-screen h-screen">
			<motion.div
				ref={closeContainer}
				className="border-primary overflow-hidden rounded-lg shadow-lg overflow-y-auto p-12 bg-gray-900 w-full lg:w-[65%] h-[60%]"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0.3 }}
				transition={{ duration: 0.4 }}>
				<div className="flex justify-end mb-8">
					<button
						className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						onClick={closeModal}>
						Go back
					</button>
				</div>
				<p className="mb-8 text-2xl font-bold mx-auto text-center">
					Add your Favorite art or photograph to your collection
				</p>
				<div className=" mb-8  border border-primary p-1 rounded-lg flex items-center justify-center">
					<p className="text-sm text-gray-300">Mint fee is 0.01 $WHIZ</p>
				</div>

				<MintNftForm />
			</motion.div>
		</motion.div>
	);
}

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAzB6ruEhkB122hEbxxnLeQXwyxQXkenUI",
//   authDomain: "reddit-clone-d7aa4.firebaseapp.com",
//   projectId: "reddit-clone-d7aa4",
//   storageBucket: "reddit-clone-d7aa4.appspot.com",
//   messagingSenderId: "860639640241",
//   appId: "1:860639640241:web:3eb3af12b7158176468090"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
