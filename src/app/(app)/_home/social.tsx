'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { defaultContainerVariants, defaultItemVariants } from '@/helpers/utils';
import { Card, CardContent } from '@/ui/card';

export default function SocialSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section ref={ref} className="px-6 py-20">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 text-center"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{/* Gradient divider line */}
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
						className="mb-6 text-4xl font-semibold lg:text-5xl lg:leading-tight"
						style={{
							background:
								'linear-gradient(90deg, #A07CFE 0%, #5DFF9F 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							letterSpacing: '-0.5px',
							textShadow: '0 0 12px rgba(93, 255, 159, 0.15)',
						}}
						variants={defaultItemVariants}
					>
						What early users are saying
					</motion.h2>
				</motion.div>

				<motion.div
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div variants={defaultItemVariants}>
						<Card className="hover-lift border-slate-700 bg-slate-800/50">
							<CardContent className="p-6">
								<blockquote className="mb-4 text-slate-300">
									&quot;Feels like I hired an EA and never had
									to explain anything.&quot;
								</blockquote>
								<div className="text-sm text-slate-400">
									— Founder, Series B SaaS
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={defaultItemVariants}>
						<Card className="hover-lift border-slate-700 bg-slate-800/50">
							<CardContent className="p-6">
								<blockquote className="mb-4 text-slate-300">
									&quot;Finally, an AI that actually
									understands the context of fast-moving
									conversations.&quot;
								</blockquote>
								<div className="text-sm text-slate-400">
									— VP Growth, Unicorn Startup
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={defaultItemVariants}>
						<Card className="hover-lift border-slate-700 bg-slate-800/50">
							<CardContent className="p-6">
								<blockquote className="mb-4 text-slate-300">
									&quot;I can&apos;t believe how much mental
									overhead this removes. Game changer.&quot;
								</blockquote>
								<div className="text-sm text-slate-400">
									— Partner, Tier 1 VC
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
