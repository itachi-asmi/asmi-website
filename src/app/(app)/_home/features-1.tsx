'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
	Brain,
	Calendar,
	MessageSquare,
	Phone,
	Target,
	Users,
} from 'lucide-react';

import { defaultContainerVariants, defaultItemVariants } from '@/helpers/utils';
import { Card, CardContent } from '@/ui/card';

export default function FeaturesSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section ref={ref} className="relative px-6 py-32">
			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					className="mb-20 text-center"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.h2
						className="gradient-text-white mb-8 text-5xl font-bold lg:text-6xl"
						variants={defaultItemVariants}
					>
						Built for{' '}
						<span className="gradient-text-primary">
							a high-context life
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400"
						variants={defaultItemVariants}
					>
						Asmi handles the cognitive overhead so you can focus on
						what matters.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{[
						{
							icon: Brain,
							title: 'Infinite Memory, Instant Recall',
							description:
								'Voice notes, conversations, decisions — Asmi never forgets context and reminds on time.',
							color: 'A07CFE',
						},
						{
							icon: Users,
							title: 'Meeting Briefs',
							description:
								"Get context on who you're meeting, your last conversation, and key talking points.",
							color: '5DFF9F',
						},
						{
							icon: Calendar,
							title: 'Natural Language Scheduling',
							description:
								'"Schedule coffee with Sarah next Tuesday at 3pm" — works with Google, Outlook, Apple.',
							color: '5DFF9F',
						},
						{
							icon: Phone,
							title: 'Contact-Aware',
							description:
								'Uses contact details from Google contacts — no need to explain who people are.',
							color: 'A07CFE',
						},
						{
							icon: Target,
							title: 'Follow-ups Handled For You',
							description:
								'Automatically follows up on commitments via iMessage — no more chasing people.',
							color: '5DFF9F',
						},
						{
							icon: MessageSquare,
							title: 'Just Talk — It Gets It',
							description:
								'Just speak naturally — Asmi understands context and intent from voice messages.',
							color: 'A07CFE',
						},
					].map((feature, index) => (
						<motion.div key={index} variants={defaultItemVariants}>
							<Card className="glass-card hover-lift group h-full border-white/10">
								<CardContent className="space-y-6 p-8">
									<div
										className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
										style={{
											background: `rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.2)`,
											boxShadow: `0 0 20px rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.3)`,
										}}
									>
										<feature.icon
											className={`size-6`}
											style={{
												color: `#${feature.color}`,
											}}
										/>
									</div>
									<h3 className="text-xl font-semibold text-white transition-colors group-hover:text-white">
										{feature.title}
									</h3>
									<p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
