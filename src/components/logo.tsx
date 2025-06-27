'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
			<Link className="relative" href="/">
				<Image
					src="/images/logo.png"
					alt="Asmi Logo"
					width={92}
					height={32}
					priority={true}
				/>
			</Link>
		</motion.div>
	);
}
