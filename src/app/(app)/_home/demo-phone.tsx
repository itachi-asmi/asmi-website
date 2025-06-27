/* eslint-disable indent */
/* eslint-disable max-lines-per-function */
'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Mic } from 'lucide-react';

const whatsappMessages = [
	{
		type: 'user',
		text: 'Hey, can you help me prep for my meeting with Sarah tomorrow?',
		delay: 2000,
		timestamp: '8:47 AM',
	},
	{
		type: 'asmi',
		text: 'Of course! Let me pull up what I know about Sarah...',
		delay: 2500,
		timestamp: '8:47 AM',
	},
	{
		type: 'asmi',
		text: 'Sarah Meeting Brief\n\n• Sarah Johnson, VP Marketing @ TechCorp\n• Last meeting: Q4 campaign discussion\n• Her priorities: Brand partnerships, growth metrics\n• Pending: Case studies you promised\n• Focus: ROI data, timeline updates',
		delay: 3000,
		timestamp: '8:48 AM',
	},
	{
		type: 'asmi',
		text: 'Should I remind you to prepare those case studies? 📊',
		delay: 3500,
		timestamp: '8:48 AM',
	},
];

const imessageMessages = [
	{
		type: 'user',
		text: 'Coffee with Mark from Acme Friday 3pm',
		delay: 2000,
		isVoice: true,
		timestamp: '2:15 PM',
	},
	{
		type: 'asmi',
		text: '🔍 Found Mark Stevens, CTO @ Acme Corp',
		delay: 2500,
		timestamp: '2:15 PM',
	},
	{
		type: 'asmi',
		text: 'Calendar Updated\nCoffee w/ Mark Stevens\nFri, Dec 8 • 3:00 PM\n\nInvite sent to mark@acmecorp.com',
		delay: 3000,
		timestamp: '2:16 PM',
	},
	{
		type: 'asmi',
		text: "Asmi's got it. 🎯",
		delay: 3500,
		timestamp: '2:16 PM',
	},
];

export function DemoPhone() {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [demoKey, setDemoKey] = useState(0);
	const [currentDemo, setCurrentDemo] = useState('whatsapp');
	const [messageIndex, setMessageIndex] = useState(0);

	useEffect(() => {
		const currentMessages =
			currentDemo === 'whatsapp' ? whatsappMessages : imessageMessages;

		if (messageIndex < currentMessages.length - 1) {
			const timer = setTimeout(() => {
				setMessageIndex((prev) => prev + 1);
			}, currentMessages[messageIndex].delay);

			return () => clearTimeout(timer);
		} else {
			// Reset to next demo after all messages are shown
			const resetTimer = setTimeout(() => {
				setIsTransitioning(true);

				setTimeout(() => {
					setCurrentDemo((prev) =>
						prev === 'whatsapp' ? 'imessage' : 'whatsapp'
					);
					setMessageIndex(0);
					setDemoKey((prev) => prev + 1);
					setIsTransitioning(false);
				}, 300);
			}, 3000);

			return () => clearTimeout(resetTimer);
		}
	}, [currentDemo, messageIndex]);

	return (
		<section className="relative px-4 py-8">
			<div className="mx-auto max-w-sm">
				<motion.div
					key={demoKey}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative"
				>
					{/* iPhone 15 Pro Frame - Fixed width */}
					<div className="relative mx-auto w-[340px] rounded-[3rem] border border-gray-600/30 bg-gray-800 p-1 shadow-2xl">
						{/* Dynamic Island - No green blinking */}
						<div className="absolute left-1/2 top-3 z-10 flex h-6 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-black">
							<div className="size-1.5 rounded-full bg-gray-500" />
						</div>

						{/* Screen - Fixed dimensions */}
						<div className="relative h-[650px] w-[338px] overflow-hidden rounded-[2.8rem] bg-black">
							{/* Status Bar */}
							<div className="flex items-center justify-between px-8 pb-2 pt-8 text-sm font-medium text-white">
								<span>9:41</span>
								<div className="flex items-center gap-1">
									<div className="h-2 w-4 rounded-sm border border-white">
										<div className="m-0.5 h-1 w-3 rounded-sm bg-green-500"></div>
									</div>
								</div>
							</div>

							<AnimatePresence mode="wait">
								{!isTransitioning && (
									<motion.div
										key={`${currentDemo}-${demoKey}`}
										initial={{
											opacity: 0,
											x:
												currentDemo === 'whatsapp'
													? 100
													: -100,
										}}
										animate={{ opacity: 1, x: 0 }}
										exit={{
											opacity: 0,
											x:
												currentDemo === 'whatsapp'
													? -100
													: 100,
										}}
										transition={{
											duration: 0.3,
											ease: 'easeInOut',
										}}
										className="h-full px-2 pb-4"
									>
										{currentDemo === 'whatsapp' ? (
											<div className="flex h-full flex-col rounded-t-3xl bg-[#0B141A]">
												{/* WhatsApp Header - No green blinking */}
												<div className="flex items-center gap-3 bg-[#202C33] p-4 text-white">
													<div className="flex size-10 items-center justify-center rounded-full bg-[#25D366]">
														<MessageSquare className="size-5 text-white" />
													</div>
													<div>
														<span className="font-medium">
															Asmi AI
														</span>
														<p className="text-xs text-green-400">
															● online
														</p>
													</div>
												</div>

												{/* Messages */}
												<div className="flex-1 space-y-3 overflow-y-auto bg-[#0B141A] p-4">
													{whatsappMessages
														.slice(
															0,
															messageIndex + 1
														)
														.map(
															(
																message,
																index
															) => (
																<motion.div
																	key={`whatsapp-${index}-${demoKey}`}
																	initial={{
																		opacity: 0,
																		scale: 0.8,
																		y: 20,
																	}}
																	animate={{
																		opacity: 1,
																		scale: 1,
																		y: 0,
																	}}
																	transition={{
																		duration: 0.4,
																		ease: 'easeOut',
																	}}
																	className={
																		message.type ===
																		'asmi'
																			? 'max-w-[85%] rounded-2xl rounded-tl-lg bg-[#202C33] p-3 shadow-lg'
																			: 'ml-auto max-w-[85%] rounded-2xl rounded-tr-lg bg-[#005C4B] p-3 shadow-lg'
																	}
																>
																	<p className="whitespace-pre-line text-sm leading-relaxed text-white">
																		{message.text.includes(
																			'Sarah Meeting Brief'
																		) ? (
																			<span>
																				<strong>
																					Sarah
																					Meeting
																					Brief
																				</strong>
																				{message.text.replace(
																					'Sarah Meeting Brief',
																					''
																				)}
																			</span>
																		) : (
																			message.text
																		)}
																	</p>
																	<p className="mt-2 flex items-center gap-1 text-xs text-gray-400">
																		<span>
																			{
																				message.timestamp
																			}
																		</span>
																		{message.type ===
																			'user' && (
																			<CheckCircle className="size-3 text-blue-400" />
																		)}
																	</p>
																</motion.div>
															)
														)}
												</div>
											</div>
										) : (
											<div className="flex h-full flex-col rounded-t-3xl bg-black">
												{/* iMessage Header - No green blinking */}
												<div className="flex items-center gap-3 border-b border-gray-800 bg-[#1C1C1E] p-4 text-white">
													<div className="flex size-10 items-center justify-center rounded-full bg-[#007AFF]">
														<MessageSquare className="size-5 text-white" />
													</div>
													<span className="font-medium">
														Asmi AI
													</span>
												</div>

												{/* Messages */}
												<div className="flex-1 space-y-3 overflow-y-auto bg-black p-4">
													{imessageMessages
														.slice(
															0,
															messageIndex + 1
														)
														.map(
															(
																message,
																index
															) => (
																<motion.div
																	key={`imessage-${index}-${demoKey}`}
																	initial={{
																		opacity: 0,
																		scale: 0.8,
																		y: 20,
																	}}
																	animate={{
																		opacity: 1,
																		scale: 1,
																		y: 0,
																	}}
																	transition={{
																		duration: 0.4,
																		ease: 'easeOut',
																	}}
																	className={
																		message.type ===
																		'asmi'
																			? 'max-w-[85%] rounded-2xl rounded-tl-lg bg-[#3C3C43] p-3 shadow-lg'
																			: 'ml-auto max-w-[85%] rounded-2xl rounded-tr-lg bg-[#007AFF] p-3 shadow-lg'
																	}
																>
																	{message.isVoice && (
																		<div className="mb-2 flex items-center gap-2">
																			<Mic className="size-4 text-white" />
																			{/* Static sound bars */}
																			<div className="flex flex-1 items-center gap-0.5">
																				<div className="h-2 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-4 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-3 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-5 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-2 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-4 w-1 rounded bg-[#5DFF9F]"></div>
																				<div className="h-3 w-1 rounded bg-[#5DFF9F]"></div>
																			</div>
																			<span className="text-xs text-gray-400">
																				0:05
																			</span>
																		</div>
																	)}
																	<p className="whitespace-pre-line text-sm leading-relaxed text-white">
																		{message.text.includes(
																			'Calendar Updated'
																		) ? (
																			<span>
																				<strong>
																					Calendar
																					Updated
																				</strong>
																				{message.text.replace(
																					'Calendar Updated',
																					''
																				)}
																			</span>
																		) : (
																			message.text
																		)}
																	</p>
																	<p className="mt-1 text-right text-xs text-gray-400">
																		{
																			message.timestamp
																		}
																	</p>
																</motion.div>
															)
														)}
												</div>
											</div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
