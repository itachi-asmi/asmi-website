'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Logo() {
	return (
		<motion.div
			className="gradient-text-primary text-2xl font-bold"
			whileHover={{ scale: 1.05 }}
		>
			<Link href="/">Asmi</Link>
		</motion.div>
	);
}
