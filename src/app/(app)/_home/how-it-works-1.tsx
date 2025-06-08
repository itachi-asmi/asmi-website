'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, MessageSquare, Target } from 'lucide-react';

import { defaultContainerVariants, defaultItemVariants } from '@/helpers/utils';

export default function HowItWorksSection() {
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
						className="gradient-text-white mb-6 text-4xl font-bold lg:text-6xl"
						variants={defaultItemVariants}
					>
						How Asmi works
					</motion.h2>
					<motion.p
						className="text-2xl font-light text-gray-400"
						variants={defaultItemVariants}
					>
						Three steps. Zero effort. High leverage.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-16 md:grid-cols-3"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{[
						{
							number: '1',
							title: 'Say it',
							description:
								'Voice note or text Asmi inside iMessage/WhatsApp — no commands, just talk naturally.',
							examples: [
								'"Remind me to follow up with Tony on pricing."',
								'"Schedule intro call with Alex next Tuesday at 3PM."',
							],
						},
						{
							number: '2',
							title: 'It remembers',
							description:
								'Asmi understands what matters, connects it to past context, and tracks it.',
							examples: [
								'• Remembers convos, decisions, promises — no manual entry needed',
								'• Builds your contextual memory graph across meetings & messages',
							],
						},
						{
							number: '3',
							title: 'You stay sharp',
							description:
								'Asmi handles the rest — scheduling, briefing, nudging, reminding — before you even ask.',
							examples: [
								'• Prepares talking points before your next call',
								'• Follows up with your team or investors',
								'• Sends gentle nudges automatically',
							],
						},
					].map((step, index) => (
						<motion.div
							key={index}
							className="group space-y-8 text-center"
							variants={defaultItemVariants}
						>
							<motion.div
								className="glass-card hover-glow mx-auto flex size-20 items-center justify-center rounded-full border border-[#5DFF9F]/10"
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3 }}
							>
								<span className="gradient-text-primary text-3xl font-bold">
									{step.number}
								</span>
							</motion.div>
							<motion.h3
								className="text-3xl font-semibold text-white"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								{step.title}
							</motion.h3>
							<p className="text-lg leading-relaxed text-gray-400">
								{step.description}
							</p>
							<div className="glass-card space-y-3 rounded-2xl border border-[#5DFF9F]/10 p-6 text-left transition-colors duration-300 group-hover:border-[#5DFF9F]/20">
								{step.examples.map((example, i) => (
									<div
										key={i}
										className="data-display text-sm leading-relaxed text-gray-300"
									>
										{example}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Example Output Visual */}
				<motion.div
					className="mx-auto mt-20 max-w-md"
					initial={{ opacity: 0, y: 50 }}
					animate={
						inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
					}
					transition={{ delay: 0.8, duration: 0.8 }}
				>
					<div className="glass-card hover-lift neon-glow rounded-3xl border border-[#5DFF9F]/20 p-8">
						<div className="space-y-4 text-white">
							<div className="flex items-start gap-3">
								<Brain className="mt-0.5 size-5 shrink-0 text-[#A07CFE]" />
								<span className="data-display text-lg">
									Your call with Alex is prepped.
								</span>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-lg text-[#5DFF9F]">
									💼
								</span>
								<span className="data-display">
									Series A, $50M ARR
								</span>
							</div>
							<div className="flex items-start gap-3">
								<MessageSquare className="mt-0.5 size-5 shrink-0 text-[#5DFF9F]" />
								<span className="data-display">
									Last chat: Pricing concerns
								</span>
							</div>
							<div className="flex items-start gap-3">
								<Target className="mt-0.5 size-5 shrink-0 text-[#5DFF9F]" />
								<span className="data-display">
									Talk about: Expansion plan, next steps
								</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
