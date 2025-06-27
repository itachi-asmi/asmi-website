/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
	ChevronLeft,
	ChevronRight,
	Clock,
	Eye,
	Mic,
	RotateCcw,
} from 'lucide-react';

import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';

interface TimelineMoment {
	time: string;
	title: string;
	userInput: string;
	asmiAction: string;
	icon: React.ComponentType<any>;
	color: string;
}

const timelineMoments: TimelineMoment[] = [
	{
		time: '7:00 AM',
		title: 'Morning Brief',
		userInput: 'Good morning',
		asmiAction:
			"📅 Today: 3 meetings, 5 follow-ups\n🎯 Priority: Close Acme deal\n⚡️ Sarah's birthday - send note",
		icon: Clock,
		color: 'text-[#5DFF9F]',
	},
	{
		time: '10:30 AM',
		title: 'Pre-Meeting Intel',
		userInput: 'Meeting with John in 10',
		asmiAction:
			'👤 John Smith, CTO @ TechFlow\n💼 Last met: Q3 roadmap discussion\n🎯 How to win: Focus on ROI metrics',
		icon: Eye,
		color: 'text-[#5DFF9F]',
	},
	{
		time: '2:15 PM',
		title: 'Voice Note Capture',
		userInput: '🎤 Follow up with investors about Series A timeline',
		asmiAction:
			'✅ Action saved\n📅 Reminder set for Monday\n📧 Draft email ready to send',
		icon: Mic,
		color: 'text-[#5DFF9F]',
	},
	{
		time: '6:00 PM',
		title: 'Follow-Up Reminders',
		userInput: 'End of day',
		asmiAction:
			'📬 3 pending follow-ups\n👤 Sarah: Thank you note sent\n💼 Acme: Proposal needs review',
		icon: RotateCcw,
		color: 'text-[#5DFF9F]',
	},
];

export const ScrollableTimeline = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const [cardWidth, setCardWidth] = useState(0);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		if (window.innerWidth >= 768) return;

		if (cardRef.current) {
			setCardWidth(cardRef.current.offsetWidth + 24); // include the gap (adjust if gap changes)
		}
	}, []);

	useEffect(() => {
		if (cardWidth === 0) return;
		const container = scrollRef.current;
		if (!container) return;

		let scrollAmount = 0;

		const interval = setInterval(() => {
			if (!container) return;

			const maxScroll = container.scrollWidth - container.clientWidth;
			scrollAmount += cardWidth;

			if (scrollAmount > maxScroll) {
				scrollAmount = 0;
			}

			container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
		}, 4000);

		return () => clearInterval(interval);
	}, [cardWidth]);

	return (
		<div className="px-4 py-16">
			<motion.h2
				className="mb-12 text-center text-3xl font-light text-white"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Your day with Asmi
			</motion.h2>

			{/* Mobile Swipe Indicators */}
			<div className="mb-6 flex items-center justify-center gap-4 md:hidden">
				<motion.div
					animate={{ x: [-5, 5, -5] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ChevronLeft className="size-5 text-gray-400" />
				</motion.div>
				<span className="text-sm text-gray-400">
					Swipe to explore timeline
				</span>
				<motion.div
					animate={{ x: [5, -5, 5] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ChevronRight className="size-5 text-gray-400" />
				</motion.div>
			</div>

			{/* Scrollable Timeline */}
			<div
				ref={scrollRef}
				className="scrollbar-hide overflow-x-auto pb-6"
			>
				<div className="flex min-w-max gap-6 px-4 md:justify-center">
					{timelineMoments.map((moment, index) => (
						<motion.div
							key={index}
							className="w-80 flex-none"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.2, duration: 0.8 }}
							whileHover={{ y: -10, scale: 1.02 }}
							ref={index === 0 ? cardRef : null}
						>
							<Card className="h-full border border-white/5 bg-gradient-to-br from-black/40 to-black/20 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#5DFF9F]/20">
								<CardContent className="space-y-4 p-6">
									{/* Time Badge */}
									<Badge className="border-[#5DFF9F]/20 bg-[#5DFF9F]/10 font-medium text-[#5DFF9F]">
										{moment.time}
									</Badge>

									{/* Icon - Monochromatic and premium */}
									<motion.div
										className={`mx-auto size-12 rounded-xl border border-white/5 bg-white/[0.03] p-3 ${moment.color}`}
										whileHover={{ rotate: 360, scale: 1.1 }}
										transition={{ duration: 0.6 }}
									>
										<moment.icon className="size-full" />
									</motion.div>

									{/* Title */}
									<h3 className="text-center text-lg font-medium text-white">
										{moment.title}
									</h3>

									{/* Chat Flow */}
									<div className="space-y-3">
										{/* User Input */}
										<motion.div
											className="relative ml-8 rounded-xl rounded-tr-md bg-[#007AFF] p-3 shadow-lg"
											initial={{ opacity: 0, x: 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{
												delay: index * 0.3 + 0.5,
											}}
										>
											<p className="text-sm text-white">
												{moment.userInput}
											</p>
											<div className="absolute -right-1 top-3 size-3 rotate-45 bg-[#007AFF]" />
										</motion.div>

										{/* Asmi Response */}
										<motion.div
											className="relative mr-8 rounded-xl rounded-tl-md border border-white/5 bg-[#1F2937] p-3 shadow-lg"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{
												delay: index * 0.3 + 0.8,
											}}
										>
											<p className="whitespace-pre-line text-sm leading-relaxed text-white">
												{moment.asmiAction}
											</p>
											<div className="absolute -left-1 top-3 size-3 rotate-45 bg-[#1F2937]" />
										</motion.div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>

			{/* Scroll indicators for larger screens */}
			<div className="mt-6 hidden justify-center gap-2 md:flex">
				{timelineMoments.map((_, index) => (
					<motion.div
						key={index}
						className="size-2 rounded-full bg-white/10"
						whileHover={{
							scale: 1.5,
							backgroundColor: 'rgba(93, 255, 159, 0.5)',
						}}
						transition={{ duration: 0.2 }}
					/>
				))}
			</div>
		</div>
	);
};
