/* eslint-disable max-lines-per-function */

'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useUiStore } from '../../../store/use-ui';
import { Button } from '../../../ui/button';
import Footer from '../_home/footer';
import Header from '../_home/header';

const testimonials = [
	{
		name: 'Steve Chen',
		role: 'Founder, Youtube',
		image: '/images/Setve.png',
		gradient: 'from-asmi-500 to-asmi-700',
		quote: '“Love the idea! I’ve always dreamed of a tool that captures my thoughts and surroundings, organizing them with AI. Asmi brings that vision to life—it’s like having a digital memory that thinks for me.”',
	},
	{
		name: 'Lalit',
		role: 'Founder, Groww',
		image: '/images/Lalit.png',
		gradient: 'from-pink-500 to-purple-600',
		quote: '"Asmi’s Personal Assistant is a game-changer for founders like me. It intuitively understands my day, decisions, and priorities—I’d absolutely pay for this."',
	},
	{
		name: 'Nandan',
		role: 'Founder, Swiggy',
		image: '/images/nandan.png',
		gradient: 'from-amber-500 to-orange-600',
		quote: '"Asmi feels deeply personal and incredibly useful—like a thinking partner that just gets you. If anyone can turn this into a global habit, it’s this team."',
	},
];

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
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<span className="relative inline-block align-baseline">
			<motion.span
				key={names[index]}
				initial={{ y: 24, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -24, opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className="absolute inset-x-0 -top-[21px] text-center text-xl font-semibold text-white"
			>
				{names[index]}
			</motion.span>
		</span>
	);
};

const TestimonialCard = ({
	name,
	role,
	image,
	gradient,
	quote,
}: {
	name: string;
	role: string;
	image: string;
	gradient: string;
	quote: string;
}) => (
	<div className="rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1">
		<div className="flex flex-col gap-6">
			<div className="w-full">
				<div className="relative">
					<div
						className={`aspect-square size-20 overflow-hidden rounded-full border-2 border-white shadow-md ${gradient}`}
					>
						<img
							src={image}
							alt={name}
							className="size-full object-cover"
						/>
					</div>
					<div className="absolute -bottom-2 -right-2 rounded-full bg-white p-1 shadow-md">
						<div className="rounded-full bg-blue-500 p-1">
							<svg
								className="size-3 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.688 1.943-1.99 1.943-3.484v-.001z" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<blockquote className="mb-4 text-lg font-medium text-gray-800">
					{quote}
				</blockquote>
				<div>
					<p className="font-semibold text-gray-900">{name}</p>
					<p className="text-sm text-gray-600">{role}</p>
				</div>
			</div>
		</div>
	</div>
);

const Waitlist = () => {
	const router = useRouter();
	const { waitlistId } = useUiStore();

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
			<Header />

			<main className="p-4">
				<div className="container mx-auto max-w-6xl">
					{/* Back button */}
					<div className="mb-8">
						<Button
							variant="ghost"
							className="hover:text-asmi-600 flex items-center text-gray-600"
							onClick={() => router.back()}
						>
							<ArrowLeft className="mr-2" size={16} />
							Back to home
						</Button>
					</div>

					{/* Welcome message - moved to the top */}
					<div className="from-asmi-800 to-asmi-600 mb-16 rounded-2xl bg-gradient-to-r p-8 text-center text-white shadow-lg md:p-12">
						<h2 className="animate-fade-in mb-6 text-3xl font-bold md:text-4xl">
							Welcome, my superstar.
						</h2>

						<div className="mb-2 gap-2 text-xl leading-relaxed  md:text-2xl">
							You&apos;ll soon be part of the same tribe as{' '}
							{<NameSlider />}
						</div>
						<div className="mb-8 block text-xl md:text-2xl">
							Magic is brewing—you&apos;re{' '}
							<span className="font-bold">#{waitlistId}</span> the
							queue and climbing.
						</div>

						<div className="animate-[pulse_3s_ease-in-out_infinite]">
							<p className="relative inline-block text-2xl font-medium">
								<span className="animate-[float_4s_ease-in-out_infinite]">
									Stay tuned!
								</span>
								<span className="absolute -bottom-2 left-0 h-0.5 w-full animate-[shimmer_3s_ease-in-out_infinite] bg-white opacity-70"></span>
							</p>
						</div>
					</div>

					<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{testimonials.map((t) => (
							<TestimonialCard
								key={t.name}
								name={t.name}
								role={t.role}
								image={t.image}
								gradient={t.gradient}
								quote={t.quote}
							/>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Waitlist;
