'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/helpers/utils';

export default function Logo({ className }: { className?: string }) {
	return (
		<motion.div
			className={cn(
				'gradient-text-primary text-2xl font-bold',
				className
			)}
			whileHover={{ scale: 1.05 }}
		>
			<Link href="/">
				<img
					src="/images/logo.png"
					alt="Asmi Logo"
					className="h-8 w-auto"
				/>
			</Link>
		</motion.div>
	);
}
