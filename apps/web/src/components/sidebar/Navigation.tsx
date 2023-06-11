/** @format */

import * as React from "react";
import { motion } from "framer-motion";
import { routLink } from "../layout/Navbar";
import MenuItems from "./MenuItems";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
export default function Navigation({ isOpen, toggleOpen }) {
	return (
		<>
			{isOpen && (
				<motion.ul
					className="absolute top-[100px] w-[230px] p-8"
					initial="closed"
					animate={isOpen ? "open" : "closed"}
					variants={variants}
					exit="closed">
					{routLink.map((item, i) => {
						return <MenuItems toggleOpen={toggleOpen} item={item} key={i} />;
					})}
				</motion.ul>
			)}
		</>
	);
}
