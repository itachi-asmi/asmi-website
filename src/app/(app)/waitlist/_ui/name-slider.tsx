'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const names = [
	'Steve',
	'Lalit',
	'Nandan',
	'Olivia',
	'Riya',
	'Mason',
	'Anaya',
	'Ethan',
	'Ishaan',
	'Grace',
	'Rohan',
	'Chloe',
	'Meera',
	'Carter',
	'Diya',
	'Logan',
	'Neel',
];

const NameSlider = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % names.length);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<span className="relative ml-2 inline-block align-baseline ">
			<motion.span
				key={names[index]}
				initial={{ y: 0, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 0, opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className="gradient-text-primary absolute inset-x-0 -top-[29px] text-center text-3xl font-semibold"
			>
				{names[index]}
			</motion.span>
		</span>
	);
};

export default NameSlider;
