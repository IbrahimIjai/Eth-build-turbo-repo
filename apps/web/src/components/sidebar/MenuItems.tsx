/** @format */

import { motion } from "framer-motion";
import * as React from "react";
import Link from "next/link";
const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export default function MenuItems({ item, toggleOpen }) {
	return (
		<motion.div
			className="flex rounded-md shadow-md bg-yellow-500 text-center justify-center mb-8 items-center cursor-pointer"
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={()=>toggleOpen(0)}
			>
			<Link href={item.route}>
				<p>{item.name}</p>
			</Link>
		</motion.div>
	);
}
