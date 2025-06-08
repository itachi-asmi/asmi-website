/* eslint-disable max-lines-per-function */
'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Target } from 'lucide-react';
import dynamic from 'next/dynamic';

import { Badge } from '@/ui/badge';
import { Loader } from '@/ui/loader';

const Slider = dynamic(
	() => import('@/components/slider').then((mod) => mod.Slider),
	{
		ssr: false,
		loading: () => <Loader />,
	}
);

const HeroForm = dynamic(() => import('./hero-form'));

const AnimatedHero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0.1, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, ease: 'easeOut', delay: 0.8 },
		},
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
			{/* Ambient background particles */}
			{/* <div className="absolute inset-0">
				<div className="animate-particle-float absolute left-1/4 top-1/4 size-96 rounded-full bg-[#5DFF9F]/5 blur-3xl"></div>
				<div
					className="animate-particle-float absolute bottom-1/4 right-1/4 size-96 rounded-full bg-[#A07CFE]/5 blur-3xl"
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className="bg-white/2 animate-particle-float absolute left-1/2 top-1/2 size-72 rounded-full blur-3xl"
					style={{ animationDelay: '4s' }}
				></div>
			</div> */}
			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<motion.div
						className="space-y-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<div className="space-y-6">
							<motion.div variants={itemVariants}>
								<Badge
									variant="secondary"
									className="glass-card hover-glow border-[#5DFF9F]/20 text-[#5DFF9F]"
								>
									Early Access
								</Badge>
							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="gradient-text-white text-6xl font-bold leading-tight lg:text-8xl"
								style={{
									fontWeight: 700,
								}}
							>
								Your Chief of Staff
							</motion.h1>

							<motion.h2
								variants={itemVariants}
								className="max-w-lg text-3xl font-light leading-relaxed text-gray-300"
							>
								built inside
								<Slider
									data={['WhatsApp', 'iMessage']}
									className="ml-2 font-medium "
								/>
							</motion.h2>

							<motion.p
								variants={itemVariants}
								className="max-w-lg text-xl leading-relaxed text-gray-400"
							>
								Asmi remembers what you say, preps you before
								meetings, and follows up — so you don&apos;t
								have to.
							</motion.p>
						</div>
						<HeroForm />
					</motion.div>

					<motion.div
						className="relative"
						variants={cardVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div
							className="glass-card hover-lift mx-auto max-w-sm rounded-3xl border border-[#5DFF9F]/10 p-8 shadow-2xl"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="mb-6 flex items-center gap-4">
								<div className="neon-glow flex size-10 items-center justify-center rounded-full bg-[#5DFF9F]/20">
									<Calendar className="size-5 text-[#5DFF9F]" />
								</div>
								<div>
									<div className="data-display text-lg font-medium text-white">
										Sync up with Reducto
									</div>
									<div className="font-medium text-[#5DFF9F]">
										3PM
									</div>
								</div>
							</div>

							<div className="space-y-4 text-white">
								<motion.div
									className="flex items-start gap-3"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 1.2,
										duration: 0.5,
									}}
								>
									<div className="neon-glow-purple mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#A07CFE]/20">
										<Calendar className="size-3 text-[#A07CFE]" />
									</div>
									<div>
										<span className="data-display text-sm text-gray-400">
											Context:
										</span>
										<div className="text-white">
											YC founder, Series A at $15M ARR
										</div>
									</div>
								</motion.div>

								<motion.div
									className="flex items-start gap-3"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 1.4,
										duration: 0.5,
									}}
								>
									<div className="neon-glow mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#5DFF9F]/20">
										<MessageSquare className="size-3 text-[#5DFF9F]" />
									</div>
									<div>
										<span className="data-display text-sm text-gray-400">
											Last chat:
										</span>
										<div className="text-white">
											Interested in your API integration
										</div>
									</div>
								</motion.div>

								<motion.div
									className="flex items-start gap-3"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 1.6,
										duration: 0.5,
									}}
								>
									<div className="neon-glow mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#5DFF9F]/20">
										<Target className="size-3 text-[#5DFF9F]" />
									</div>
									<div>
										<span className="data-display text-sm text-gray-400">
											Talk about:
										</span>
										<div className="text-white">
											Partnership timeline, technical
											requirements
										</div>
									</div>
								</motion.div>
							</div>

							<div className="data-display mt-6 text-right text-xs text-gray-500">
								2:58 PM
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AnimatedHero;
