'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { Badge } from '@/ui/badge';

const personalityPhrases = [
	'Always listening (in a good way)',
	'Built for chaotic days',
	"Asmi's got it",
	'Your smart sidekick',
];

export const HeroSection = () => {
	const [typingText, setTypingText] = useState('');
	const heroRef = useRef(null);
	const heroInView = useInView(heroRef, { once: true });

	useEffect(() => {
		let phraseIndex = 0;
		let charIndex = 0;
		let isDeleting = false;

		const typeWriter = () => {
			const currentPhrase = personalityPhrases[phraseIndex];

			if (isDeleting) {
				setTypingText(currentPhrase.substring(0, charIndex - 1));
				charIndex--;
				if (charIndex === 0) {
					isDeleting = false;
					phraseIndex = (phraseIndex + 1) % personalityPhrases.length;
				}
			} else {
				setTypingText(currentPhrase.substring(0, charIndex + 1));
				charIndex++;
				if (charIndex === currentPhrase.length) {
					isDeleting = true;
					setTimeout(() => {}, 2000);
				}
			}
		};

		const interval = setInterval(typeWriter, isDeleting ? 50 : 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<section ref={heroRef} className="relative px-4 pb-8 pt-32">
			<div className="relative z-10 mx-auto max-w-6xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={heroInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={heroInView ? { scale: 1, opacity: 1 } : {}}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						<Badge className="mb-8 border-[#5DFF9F]/20 bg-[#5DFF9F]/10 px-4 py-2 text-sm text-[#5DFF9F]">
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'linear',
								}}
								className="mr-2 size-2 rounded-full bg-[#5DFF9F]"
							/>
							Your AI Chief of Staff
						</Badge>
					</motion.div>

					<motion.h1
						className="mb-6 text-4xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						animate={heroInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						<span className="text-[#5DFF9F]">Get Things Done.</span>
					</motion.h1>

					<motion.div
						className="mb-8 flex h-8 items-center justify-center text-lg text-gray-400"
						initial={{ opacity: 0 }}
						animate={heroInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.8, duration: 0.6 }}
					>
						<span className="font-mono">{typingText}</span>
						<motion.span
							animate={{ opacity: [1, 0] }}
							transition={{ duration: 0.8, repeat: Infinity }}
							className="ml-1 text-[#5DFF9F]"
						>
							|
						</motion.span>
					</motion.div>

					<motion.p
						className="mb-12 text-lg text-gray-300"
						initial={{ opacity: 0 }}
						animate={heroInView ? { opacity: 1 } : {}}
						transition={{ delay: 1, duration: 0.6 }}
					>
						On WhatsApp/iMessage
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};
