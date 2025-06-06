/* eslint-disable max-lines-per-function */
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const ToggleComparison = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [showWithAsmi, setShowWithAsmi] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const contentVariants = {
		hidden: {
			opacity: 0,
			x: showWithAsmi ? 20 : -20,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			x: showWithAsmi ? -20 : 20,
			transition: { duration: 0.3, ease: 'easeIn' },
		},
	};

	const listItemVariants = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: 'easeOut' },
		},
	};

	const comparisonData = [
		{
			without: {
				text: 'Walk in blind — no context from past meetings',
			},
			with: {
				text: 'Prepped in seconds — WhatsApp briefs with names, history, key points',
			},
		},
		{
			without: {
				text: 'Forget follow-ups — voice notes disappear',
			},
			with: {
				text: 'Asmi remembers — follows up for you automatically',
			},
		},
		{
			without: {
				text: 'Waste 15 mins prepping every call',
			},
			with: {
				text: 'Skip prep — Asmi summarizes it all instantly',
			},
		},
		{
			without: {
				text: 'Juggle WhatsApp, calendar, Notion',
			},
			with: {
				text: 'Say it once — Asmi syncs it all',
			},
		},
		{
			without: {
				text: 'Manually chase people for updates',
			},
			with: {
				text: 'Gentle nudges sent automatically',
			},
		},
	];

	const currentData = showWithAsmi
		? comparisonData.map((item) => item.with)
		: comparisonData.map((item) => item.without);

	return (
		<section ref={ref} className="relative px-6 py-20">
			{/* Gradient divider line above */}
			<motion.div
				className="mx-auto mb-8 h-0.5 w-20"
				style={{
					background: 'linear-gradient(90deg, #A07CFE, #5DFF9F)',
					borderRadius: '2px',
				}}
				variants={itemVariants}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
			/>

			{/* Animated background orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute left-1/4 top-1/2 size-80 rounded-full blur-3xl"
					style={{
						background:
							'radial-gradient(circle, rgba(160, 124, 254, 0.06) 0%, rgba(13, 13, 13, 0) 70%)',
					}}
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.6, 0.8, 0.6],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute right-1/4 top-1/2 size-80 rounded-full blur-3xl"
					style={{
						background:
							'radial-gradient(circle, rgba(93, 255, 159, 0.05) 0%, rgba(13, 13, 13, 0) 70%)',
					}}
					animate={{
						scale: [1.1, 1, 1.1],
						opacity: [0.8, 0.6, 0.8],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 4,
					}}
				/>

				{/* Pulse ring behind toggle */}
				<motion.div
					className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.3, 0, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[900px]">
				<motion.div
					className="mb-12 text-center"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					<motion.h2
						className="mb-10 text-4xl font-semibold lg:text-5xl"
						style={{
							background:
								'linear-gradient(90deg, #A07CFE 0%, #5DFF9F 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							letterSpacing: '-0.5px',
							textShadow: '0 0 12px rgba(93, 255, 159, 0.15)',
						}}
						variants={itemVariants}
					>
						The difference is night and day
					</motion.h2>

					{/* Toggle Switch */}
					<motion.div
						className="mb-10 flex items-center justify-center"
						variants={itemVariants}
					>
						<div className="flex items-center space-x-6">
							<span
								className={`text-lg font-medium transition-colors duration-300 ${!showWithAsmi ? 'text-white' : 'text-gray-400'}`}
							>
								Without Asmi
							</span>

							<motion.button
								onClick={() => setShowWithAsmi(!showWithAsmi)}
								className={`relative h-8 w-16 rounded-full transition-all duration-300 focus:outline-none ${
									showWithAsmi
										? 'bg-[#5DFF9F]/20 shadow-[0_0_20px_rgba(93,255,159,0.3)]'
										: 'bg-red-500/20 shadow-[0_0_20px_rgba(255,92,92,0.3)]'
								}`}
								style={{
									border: showWithAsmi
										? '1px solid rgba(93, 255, 159, 0.3)'
										: '1px solid rgba(255, 92, 92, 0.3)',
								}}
								whileTap={{ scale: 0.95 }}
							>
								<motion.div
									className={`absolute top-1 size-6 rounded-full transition-all duration-300 ${
										showWithAsmi
											? 'bg-[#5DFF9F]'
											: 'bg-red-500'
									}`}
									animate={{
										x: showWithAsmi ? 32 : 4,
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}
								/>
							</motion.button>

							<span
								className={`text-lg font-medium transition-colors duration-300 ${showWithAsmi ? 'text-white' : 'text-gray-400'}`}
							>
								With Asmi
							</span>
						</div>
					</motion.div>
				</motion.div>

				{/* Content Card */}
				<motion.div
					className="relative mx-auto max-w-[900px] rounded-2xl border p-2 lg:p-8"
					style={{
						background: 'rgba(255, 255, 255, 0.02)',
						backdropFilter: 'blur(20px)',
						border: '1px solid rgba(255, 255, 255, 0.08)',
					}}
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Subtle background gradient */}
					<div
						className="absolute inset-0 rounded-2xl opacity-5"
						style={{
							background:
								'radial-gradient(circle at center, #202020, #0D0D0D)',
						}}
					/>

					<AnimatePresence mode="wait">
						<motion.div
							key={showWithAsmi ? 'with' : 'without'}
							variants={contentVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="relative z-10 space-y-0 lg:space-y-6"
						>
							{currentData.map((item, index) => (
								<motion.div
									key={index}
									variants={listItemVariants}
									className="group flex cursor-pointer items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-[#121212]"
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.2 }}
								>
									<div className="mt-0.5 shrink-0">
										{showWithAsmi ? (
											<CheckCircle
												className="size-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(93,255,159,0.5)]"
												stroke="#5DFF9F"
												strokeWidth={2}
												fill="none"
											/>
										) : (
											<XCircle
												className="size-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,92,92,0.5)]"
												stroke="#FF5C5C"
												strokeWidth={2}
												fill="none"
											/>
										)}
									</div>
									<div className="flex-1">
										<span
											className={`text-lg leading-relaxed transition-colors duration-300 ${
												showWithAsmi
													? 'text-white group-hover:text-[#5DFF9F]'
													: 'text-gray-300 group-hover:text-white'
											}`}
											style={{
												fontFamily:
													"'General Sans', Inter, sans-serif",
											}}
										>
											{item.text}
										</span>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</div>

			{/* Gradient divider line below */}
			<motion.div
				className="mx-auto mt-8 h-0.5 w-20"
				style={{
					background: 'linear-gradient(90deg, #A07CFE, #5DFF9F)',
					borderRadius: '2px',
				}}
				variants={itemVariants}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
			/>
		</section>
	);
};

export default ToggleComparison;
