'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import Cursor from '@/components/cursor';
import "./timeline.style.scss";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Timeline() {
	const timelineContent = [
		{
			date: '1957',
			title: 'Founded in Pittsburgh, PA',
			description: 'Howard Hanna Real Estate Services opens its first office in the Oakland/Shadyside neighborhood, founded by Howard and Anne Freyvogel Hanna.'
		},
		{
			date: '1968-1985',
			title: 'Integrated Services Introduced',
			description: 'Pioneering a one-stop-shop model, Howard Hanna launches divisions for Appraisal (1968), Relocation (1977), Title (1980), Mortgage (1983), and Insurance (1985)—laying the groundwork for full-service real estate.'
		},
		{
			date: '1984',
			title: '100% Money Back Guarantee',
			description: 'First in the nation to offer a 100% Money Back Guarantee on home purchases—a bold move that became a signature of the brand.'
		},
		{
			date: '1986',
			title: 'Televised Home Search Experience',
			description: 'Debuts The Howard Hanna Sunday Showcase of Homes, one of the country’s first real estate TV shows.'
		},
		{
			date: '1995',
			title: 'Digital Pioneer',
			description: 'Launches HowardHanna.com, becoming the first real estate brokerage to list every property online—ahead of the internet boom.'
		}
	]

	return (
		<main>
			<Cursor />

			<section id="timeline" className="timeline">

				{timelineContent.map((item, index) => (
					<div key={index} className="timeline__item">
						<div className="timeline__item-layout">
							<div className="timeline__item-left">
								<p className="timeline__item__date">{item.date}</p>
								<div className="timeline__item__bullet"></div>
							</div>
							<div className="timeline__item-right">
								<h3 className="timeline__item__title">{item.title}</h3>
								<p className="timeline__item__description">{item.description}</p>
							</div>
						</div>
					</div>
				))}

			</section>
		</main>
	)
}