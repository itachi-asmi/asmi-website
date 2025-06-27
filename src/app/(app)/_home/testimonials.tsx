/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Card, CardContent } from '@/ui/card';

interface Testimonial {
	quote: string;
	name: string;
	role: string;
	avatar: string;
}

const testimonials: Testimonial[] = [
	{
		quote: "I live in iMessage. Asmi preps my investor calls, tracks follow-ups, and remembers promises I'd otherwise forget.",
		name: 'Alex Chen',
		role: 'Series A Founder',
		avatar: '🚀',
	},
	{
		quote: 'Our GTM team operates via chat. Asmi keeps us synced on prospects, deals, and next steps without the dashboard bloat.',
		name: 'Sarah Park',
		role: 'VP Growth @ Scale Co',
		avatar: '⚡',
	},
	{
		quote: '50 founder meetings a week. Asmi remembers every conversation, preps context, and drafts perfect follow-ups.',
		name: 'Marcus Rodriguez',
		role: 'Partner @ Velocity VC',
		avatar: '💰',
	},
];

export const TypingTestimonials = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [displayedText, setDisplayedText] = useState('');
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const currentQuote = testimonials[currentTestimonial].quote;
		let charIndex = 0;
		setDisplayedText('');
		setIsTyping(true);

		const typeWriter = () => {
			if (charIndex < currentQuote.length) {
				setDisplayedText(currentQuote.substring(0, charIndex + 1));
				charIndex++;
				setTimeout(typeWriter, 30 + Math.random() * 20); // Varying speed for natural feel
			} else {
				setIsTyping(false);
				setTimeout(() => {
					setCurrentTestimonial(
						(prev) => (prev + 1) % testimonials.length
					);
				}, 3000);
			}
		};

		typeWriter();
	}, [currentTestimonial]);

	return (
		<div className="px-4 py-16">
			<motion.h2
				className="mb-12 text-center text-3xl font-light text-white"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Loved by fast movers
			</motion.h2>

			<div className="mx-auto max-w-md">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentTestimonial}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
					>
						<Card className="border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20">
							<CardContent className="space-y-4 p-6">
								{/* Typing Indicator */}
								<div className="mb-2 flex items-center gap-2">
									<div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-sm">
										{
											testimonials[currentTestimonial]
												.avatar
										}
									</div>
									<div className="flex gap-1">
										{isTyping && (
											<>
												<motion.div
													className="size-1 rounded-full bg-[#5DFF9F]"
													animate={{
														opacity: [0.4, 1, 0.4],
													}}
													transition={{
														duration: 0.6,
														repeat: Infinity,
														delay: 0,
													}}
												/>
												<motion.div
													className="size-1 rounded-full bg-[#5DFF9F]"
													animate={{
														opacity: [0.4, 1, 0.4],
													}}
													transition={{
														duration: 0.6,
														repeat: Infinity,
														delay: 0.2,
													}}
												/>
												<motion.div
													className="size-1 rounded-full bg-[#5DFF9F]"
													animate={{
														opacity: [0.4, 1, 0.4],
													}}
													transition={{
														duration: 0.6,
														repeat: Infinity,
														delay: 0.4,
													}}
												/>
											</>
										)}
									</div>
								</div>

								{/* Chat Bubble */}
								<motion.div
									className="relative rounded-2xl rounded-tl-md bg-[#202C33] p-4"
									initial={{ scale: 0.9 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.3 }}
								>
									<p className="min-h-12 text-base leading-relaxed text-white">
										"{displayedText}"
										{isTyping && (
											<motion.span
												className="ml-1 text-[#5DFF9F]"
												animate={{ opacity: [1, 0] }}
												transition={{
													duration: 0.8,
													repeat: Infinity,
												}}
											>
												|
											</motion.span>
										)}
									</p>
									<div className="absolute -bottom-2 left-6 size-4 rotate-45 bg-[#202C33]" />
								</motion.div>

								{/* User Info */}
								<div className="flex items-center gap-3 pt-2">
									<motion.div
										className="flex size-10 items-center justify-center rounded-full bg-white/10 text-lg"
										whileHover={{ scale: 1.1, rotate: 5 }}
									>
										{
											testimonials[currentTestimonial]
												.avatar
										}
									</motion.div>
									<div>
										<p className="font-medium text-white">
											{
												testimonials[currentTestimonial]
													.name
											}
										</p>
										<p className="text-sm text-gray-400">
											{
												testimonials[currentTestimonial]
													.role
											}
										</p>
									</div>
								</div>

								{/* Progress Dots */}
								<div className="flex justify-center gap-2 pt-4">
									{testimonials.map((_, index) => (
										<motion.div
											key={index}
											className={`size-2 rounded-full transition-colors ${
												index === currentTestimonial
													? 'bg-[#5DFF9F]'
													: 'bg-white/20'
											}`}
											whileHover={{ scale: 1.2 }}
										/>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};
