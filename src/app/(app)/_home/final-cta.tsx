'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

import { defaultContainerVariants, defaultItemVariants } from '@/helpers/utils';
import { Badge } from '@/ui/badge';
import { Loader } from '@/ui/loader';

const Slider = dynamic(
	() => import('@/components/slider').then((mod) => mod.Slider),
	{
		ssr: false,
		loading: () => <Loader />,
	}
);

const HeroForm = dynamic(() => import('./hero-form'), {
	ssr: false,
	loading: () => <Loader />,
});

export default function CtaSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section ref={ref} className="relative px-6 py-32">
			<div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/10 to-[#5DFF9F]/10"></div>
			<div className="relative z-10 mx-auto max-w-4xl text-center">
				<motion.div
					variants={defaultContainerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div className="mb-4" variants={defaultItemVariants}>
						<Badge className="animate-glow-pulse border-[#5DFF9F]/30 bg-[#5DFF9F]/20 text-[#5DFF9F]">
							<span className="animate-typing-cursor">🔥</span>{' '}
							Only 100 spots left
						</Badge>
					</motion.div>

					<motion.h2
						className="mb-8 text-5xl font-bold leading-tight text-white lg:text-6xl"
						variants={defaultItemVariants}
					>
						We&#39;re onboarding 100 people who move{' '}
						<span className="gradient-text-primary">
							faster than their calendar.
						</span>
					</motion.h2>

					<motion.div
						className="relative mb-12 text-xl leading-relaxed text-gray-300"
						variants={defaultItemVariants}
					>
						<span>
							Join the beta and get your AI Chief of Staff inside
							<span className="relative inline-block w-[8ch] align-baseline">
								<Slider
									data={['WhatsApp.', 'iMessage.']}
									className="absolute left-[5px] top-[-22px] font-medium"
								/>
							</span>
						</span>
					</motion.div>
					<HeroForm
						className="mx-auto max-w-md space-y-6"
						containerClasses="flex-col"
						inputClasses="glass-card h-14 w-full border-[#5DFF9F]/20 text-lg text-white placeholder:text-gray-400 !w-full"
						btnClasses="hover-glow h-14 w-full bg-white text-lg font-semibold text-black transition-all duration-300 hover:bg-[#5DFF9F] hover:text-black"
					/>
					{/* <motion.p
							className="mt-6 text-sm text-gray-400"
							variants={defaultItemVariants}
						>
							No credit card required. Early access closes
							December 15th.
						</motion.p> */}
				</motion.div>
			</div>
		</section>
	);
}
