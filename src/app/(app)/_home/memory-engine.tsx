/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Calendar, Globe, Mail, Mic } from 'lucide-react';

import { Card } from '@/ui/card';

const memoryNodes = [
	{
		id: 'calendar',
		icon: Calendar,
		label: 'Calendar',
		position: { x: 50, y: 20 },
		mobilePosition: { x: 50, y: 25 },
		data: [
			'Meeting with Sarah @ 3pm',
			'Investor call @ 5pm',
			'Team standup @ 9am',
		],
	},
	{
		id: 'mail',
		icon: Mail,
		label: 'Mails',
		position: { x: 80, y: 50 },
		mobilePosition: { x: 75, y: 50 },
		data: ['Follow-up from John', 'Q4 report due', 'Partnership proposal'],
	},
	{
		id: 'voice',
		icon: Mic,
		label: 'Voice Notes',
		position: { x: 50, y: 80 },
		mobilePosition: { x: 50, y: 75 },
		data: [
			'Remember to call mom',
			'Book flight to NYC',
			'Review pitch deck',
		],
	},
	{
		id: 'internet',
		icon: Globe,
		label: 'Internet',
		position: { x: 20, y: 50 },
		mobilePosition: { x: 25, y: 50 },
		data: [
			"Sarah's LinkedIn updated",
			'Company news alert',
			'Market trends',
		],
	},
];

export const NeuralMemoryEngine = () => {
	const [activeNode, setActiveNode] = useState<string | null>(null);
	const [dots, setDots] = useState<any[]>([]);
	const [lines, setLines] = useState<any[]>([]);
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	useEffect(() => {
		// move this to a util if needed
		setDots(
			Array.from({ length: 20 }).map(() => ({
				left: Math.random() * 100,
				top: Math.random() * 100,
				delay: Math.random() * 2,
			}))
		);

		setLines(
			Array.from({ length: 4 }).map((_, i) => ({
				width: 20 + Math.random() * 30,
				left: Math.random() * 70,
				top: Math.random() * 100,
				rotate: Math.random() * 360,
				duration: 2 + Math.random() * 2,
				delay: i * 0.5,
			}))
		);
	}, []);

	return (
		<div className="relative px-4 py-16">
			<div className="mx-auto max-w-6xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="mb-6 text-3xl font-light text-white">
						Asmi Memory Engine
					</h2>
					<p className="mx-auto mb-12 max-w-3xl text-lg text-gray-400">
						Every mail, meeting, and voice note connects in
						real-time
					</p>
					<div className="flex justify-center">
						<div className="relative mx-auto h-80 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl md:h-96">
							<NeuralVisualization dots={dots} lines={lines} />

							{memoryNodes.map((node, index) => {
								const position = isMobile
									? node.mobilePosition
									: node.position;
								return (
									<MemoryNode
										key={node.id}
										node={node}
										position={position}
										isActive={activeNode === node.id}
										index={index}
										onToggle={(id: string) =>
											setActiveNode(
												activeNode === id ? null : id
											)
										}
									>
										{activeNode === node.id && (
											<MemoryPopup
												node={node}
												position={position}
											/>
										)}
									</MemoryNode>
								);
							})}
						</div>
					</div>
					<p className="mt-4 text-sm text-gray-400">
						Tap nodes to see what Asmi learns
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export const NeuralVisualization = ({ dots, lines }: any) => (
	<>
		{dots.map((dot: any, i: number) => (
			<motion.div
				key={i}
				className="absolute size-1 rounded-full bg-[#5DFF9F]/40"
				style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
				animate={{
					y: [0, -20, 0],
					opacity: [0.2, 1, 0.2],
					scale: [0.5, 1.5, 0.5],
				}}
				transition={{
					duration: 3 + Math.random() * 2,
					repeat: Infinity,
					delay: dot.delay,
				}}
			/>
		))}

		<motion.div
			className="absolute z-10 flex size-full items-center justify-center"
			animate={{
				scale: [1, 1.1, 1],
				boxShadow: [
					'0 0 0 0 rgba(93, 255, 159, 0.4)',
					'0 0 0 20px rgba(93, 255, 159, 0)',
					'0 0 0 0 rgba(93, 255, 159, 0)',
				],
			}}
			transition={{ duration: 2, repeat: Infinity }}
		>
			<div className="flex size-12 items-center justify-center rounded-full bg-[#5DFF9F] shadow-lg md:size-16">
				<Brain className="size-6 text-black md:size-8" />
			</div>
		</motion.div>

		{lines.map((line: any, i: number) => (
			<motion.div
				key={i}
				className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#5DFF9F]/30 to-transparent"
				style={{
					width: `${line.width}%`,
					left: `${line.left}%`,
					top: `${line.top}%`,
					transform: `rotate(${line.rotate}deg)`,
				}}
				animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1, 0] }}
				transition={{
					duration: line.duration,
					repeat: Infinity,
					delay: line.delay,
				}}
			/>
		))}
	</>
);

export const MemoryPopup = ({ node, position }: any) => {
	const alignRight = position.x > 75;
	const alignBottom = position.y > 60;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			className="absolute z-30"
			style={{
				top: alignBottom ? 'auto' : '100%',
				bottom: alignBottom ? '100%' : 'auto',
				marginTop: alignBottom ? undefined : '0.5rem', // mt-2
				marginBottom: alignBottom ? '0.5rem' : undefined, // mb-2
				left: alignRight ? 'auto' : '50%',
				right: alignRight ? '0' : 'auto',
				transform: alignRight ? 'translateX(0)' : 'translateX(-50%)',
			}}
		>
			<Card className="w-48 border-[#5DFF9F]/30 bg-black/90 p-3 backdrop-blur-xl md:w-56">
				<div className="space-y-1">
					{node.data.map((item: string, i: number) => (
						<motion.p
							key={i}
							className="break-words text-xs text-white"
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.1 }}
						>
							• {item}
						</motion.p>
					))}
				</div>
			</Card>
		</motion.div>
	);
};

export const MemoryNode = ({
	node,
	position,
	isActive,
	onToggle,
	index,
	children,
}: any) => (
	<motion.div
		className="absolute z-20 cursor-pointer"
		style={{
			left: `${position.x}%`,
			top: `${position.y}%`,
			transform: 'translate(-50%, -50%)',
		}}
		initial={{ scale: 0, opacity: 0 }}
		whileInView={{ scale: 1, opacity: 1 }}
		transition={{ delay: index * 0.2, duration: 0.6 }}
		whileHover={{ scale: 1.1 }}
		onTap={() => onToggle(node.id)}
	>
		<div className="flex flex-col items-center gap-2">
			<div className="relative flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm md:size-10">
				<node.icon className="size-4 text-[#5DFF9F] md:size-5" />
				{isActive && (
					<motion.div
						className="absolute inset-0 rounded-full bg-[#5DFF9F]/20"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.5, 0, 0.5],
						}}
						transition={{ duration: 1, repeat: Infinity }}
					/>
				)}
			</div>
			<span className="whitespace-nowrap text-xs font-medium text-gray-300">
				{node.label}
			</span>
		</div>
		{children}
	</motion.div>
);
