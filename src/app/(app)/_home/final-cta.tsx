/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

import HeroForm from './form';

import { Badge } from '@/ui/badge';

export function FinalCTA() {
	return (
		<section className="mb-20 px-4 py-16 text-center">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mx-auto max-w-2xl"
			>
				<motion.div className="mb-4">
					<Badge className="mb-4 border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
						<motion.div
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 1, repeat: Infinity }}
							className="mr-2 size-2 rounded-full bg-red-400"
						/>
						Only 47 spots left in beta
					</Badge>
				</motion.div>

				<h2 className="mb-8 text-4xl font-light text-white">
					We're onboarding{' '}
					<span className="text-[#5DFF9F]">100 people</span> who
					faster than their calendar.
				</h2>

				<p className="mb-8 text-lg text-gray-300">
					Join the exclusive beta before we close applications.
				</p>

				<motion.div
					className="mx-auto mb-8 max-w-md rounded-2xl border border-white/5 bg-gradient-to-br from-black/40 to-black/20 px-2 py-6 shadow-2xl backdrop-blur-xl lg:p-6"
					whileHover={{ scale: 1.02 }}
				>
					<HeroForm />

					<p className="mt-3 text-center text-xs text-gray-400">
						Applications close when we hit 100 members
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
}
