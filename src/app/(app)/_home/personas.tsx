/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { defaultContainerVariants, defaultItemVariants } from '@/helpers/utils';
import { Card, CardContent } from '@/ui/card';

export default function PersonasSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section ref={ref} className="relative px-6 py-20">
			<div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/5 via-transparent to-[#5DFF9F]/5"></div>
			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					className="mb-16 text-center"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div
						className="mx-auto mb-3 h-0.5 w-20"
						style={{
							background:
								'linear-gradient(90deg, #A07CFE, #5DFF9F)',
							borderRadius: '2px',
						}}
						variants={defaultItemVariants}
					/>

					<motion.h2
						className="mb-6 text-4xl font-semibold text-white lg:text-5xl lg:leading-tight"
						variants={defaultItemVariants}
					>
						Built for{' '}
						<span className="gradient-text-primary">
							high-velocity operators
						</span>
					</motion.h2>
				</motion.div>

				<motion.div
					className="grid gap-8 md:grid-cols-3"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{[
						{
							emoji: '🧑‍🚀',
							title: 'Founders',
							quote: 'I voice-note investor updates at midnight. Asmi turns them into follow-ups, summaries, and calendar events — before I forget.',
							features: [
								'Remember every investor conversation',
								'Never miss a follow-up',
								'Prep for every meeting',
							],
						},
						{
							emoji: '🧑‍💼',
							title: 'Startup Teams',
							quote: 'No more chasing teammates. I just say it once. Asmi tracks it, reminds them, and gives me updates before standup.',
							features: [
								'Coordinate without context-switching',
								'Automate status updates',
								'Never drop commitments',
							],
						},
						{
							emoji: '💸',
							title: 'VCs & Angels',
							quote: "I don't prep decks for calls anymore. Asmi gives me the founder's context, last chat, and deal notes in iMessage — right before we speak.",
							features: [
								'Track every founder interaction',
								'Remember deal terms and updates',
								'Perfect intro preparation',
							],
						},
					].map((persona, index) => (
						<motion.div key={index} variants={defaultItemVariants}>
							<Card className="glass-card-dark hover-lift group h-full border-[#5DFF9F]/20">
								<CardContent className="space-y-4 p-8">
									<div className="mb-4 text-4xl">
										{persona.emoji}
									</div>
									<h3 className="text-2xl font-bold text-white">
										{persona.title}
									</h3>
									<p className="mb-4 italic text-slate-300">
										<span>"{persona.quote}"</span>
									</p>
									<ul className="space-y-2 text-sm text-slate-300">
										{persona.features.map((feature, i) => (
											<li key={i}>• {feature}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
