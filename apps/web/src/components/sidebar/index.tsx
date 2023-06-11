/** @format */

"use client";

import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/Usedimension";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: () => ({
		clipPath: "circle(0.1px at 40px 40px)",
		zIndex: 0,
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	}),
};
export default function Siebar() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const deadSwitch = useRef(null);
	const { height } = useDimensions(containerRef);
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			console.log(isOpen);

			if (deadSwitch.current && !deadSwitch.current.contains(e.target)) {
				toggleOpen(0);
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [toggleOpen]);
	console.log(isOpen);

	return (
		<motion.nav
			className={`fixed left-0 bottom-0 top-0 z-30 lg:hidden`}
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}>
			<div ref={deadSwitch}>
				<motion.div
					className={`absolute w-[250px] bg-yellow-600 left-0 bottom-0 top-0 
					
					`}
					variants={sidebar}
				/>
				<Navigation toggleOpen={toggleOpen} isOpen={isOpen} />
				<MenuToggle toggle={() => toggleOpen()} />
			</div>
		</motion.nav>
	);
}
