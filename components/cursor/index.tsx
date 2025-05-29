'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./cursor.style.css";

gsap.registerPlugin(useGSAP);

export default function Cursor(){
	const cc = useRef<HTMLDivElement | null>(null);
	const cursor = useRef<HTMLDivElement | null>(null);
	const xTo = useRef<gsap.QuickToFunc | null>(null);
	const yTo = useRef<gsap.QuickToFunc | null>(null);

	const { contextSafe } = useGSAP(() => {
		if (xTo) xTo.current = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "expo" })
		if (yTo) yTo.current = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "expo" })
	}, { scope: cc })

	const moveCursor = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
		if (xTo.current && yTo.current) {
			xTo.current(e.clientX)
			yTo.current(e.clientY)

			cursor.current?.classList.add("active")
		}
	})

	return (
		<div className="cc" ref={cc} onMouseMove={e => moveCursor(e)}>
			<div className="cursor" ref={cursor}></div>
		</div>
	)
}

export { Cursor }