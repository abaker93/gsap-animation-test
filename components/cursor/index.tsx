'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./cursor.style.css";

gsap.registerPlugin(useGSAP);

export default function Cursor(){
	const container = useRef();
	const xTo = useRef();
	const yTo = useRef();

	const { contextSafe } = useGSAP(() => {
		xTo.current = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "expo" }),
		yTo.current = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "expo" });
	}, { scope: container})

	const moveCursor = contextSafe((e) => {
		if (xTo.current && yTo.current) {
			xTo.current(e.clientX)
			yTo.current(e.clientY)
		}
	})

	return (
		<div className="container" ref={container} onMouseMove={e => moveCursor(e)}>
			<div className="cursor"></div>
		</div>
	)
}

export { Cursor }