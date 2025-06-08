'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/helpers/utils';

export const Slider = ({
	data,
	className,
}: {
	data: string[];
	className?: string;
}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % data.length);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.span
			key={data[index]}
			initial={{ y: 0, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 0, opacity: 0 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={cn('gradient-text-primary min-w-[20ch]', className)}
		>
			{data[index]}
		</motion.span>
	);
};
