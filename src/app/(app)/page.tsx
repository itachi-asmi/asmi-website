'use client';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-lines-per-function */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
	Brain,
	Calendar,
	MessageSquare,
	Phone,
	Target,
	Users,
} from 'lucide-react';

import AnimatedHero from './_home/animated-hero';
import HeroForm from './_home/hero-form';
import NewFooter from './_home/new-footer';
import ToggleComparison from './_home/toggle-comparision';

import Nav from '@/components/nav';
import { Slider } from '@/components/slider';
import { Badge } from '@/ui/badge';
import { Card, CardContent } from '@/ui/card';

const Index = () => {
	const featuresRef = useRef(null);
	const personasRef = useRef(null);
	const socialProofRef = useRef(null);
	const howItWorksRef = useRef(null);
	const finalCtaRef = useRef(null);

	const featuresInView = useInView(featuresRef, {
		once: true,
		margin: '-100px',
	});
	const personasInView = useInView(personasRef, {
		once: true,
		margin: '-100px',
	});
	const socialProofInView = useInView(socialProofRef, {
		once: true,
		margin: '-100px',
	});
	const howItWorksInView = useInView(howItWorksRef, {
		once: true,
		margin: '-100px',
	});
	const finalCtaInView = useInView(finalCtaRef, {
		once: true,
		margin: '-100px',
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<div className="home min-h-screen bg-[#0B0B0B]">
			{/* Navigation */}
			<Nav />

			{/* Hero Section */}
			<AnimatedHero />

			{/* Problem/Solution Section */}
			<ToggleComparison />

			{/* Features Section */}
			<section ref={featuresRef} className="relative px-6 py-32">
				{/* <div className="absolute inset-0">
					<div className="bg-[#A07CFE]/3 animate-particle-float absolute left-1/4 top-1/4 size-96 rounded-full blur-3xl"></div>
					<div
						className="bg-[#5DFF9F]/3 animate-particle-float absolute bottom-1/4 right-1/4 size-96 rounded-full blur-3xl"
						style={{ animationDelay: '3s' }}
					></div>
				</div> */}

				<div className="relative z-10 mx-auto max-w-7xl">
					<motion.div
						className="mb-20 text-center"
						variants={containerVariants}
						initial="hidden"
						animate={featuresInView ? 'visible' : 'hidden'}
					>
						<motion.h2
							className="gradient-text-white mb-8 text-5xl font-bold lg:text-6xl"
							variants={itemVariants}
						>
							Built for{' '}
							<span className="gradient-text-primary">
								a high-context life
							</span>
						</motion.h2>
						<motion.p
							className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400"
							variants={itemVariants}
						>
							Asmi handles the cognitive overhead so you can focus
							on what matters.
						</motion.p>
					</motion.div>

					<motion.div
						className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						animate={featuresInView ? 'visible' : 'hidden'}
					>
						{[
							{
								icon: Brain,
								title: 'Infinite Memory, Instant Recall',
								description:
									'Voice notes, conversations, decisions — Asmi never forgets context or commitments.',
								color: 'A07CFE',
							},
							{
								icon: Users,
								title: 'Meeting Briefs',
								description:
									"Get context on who you're meeting, your last conversation, and key talking points.",
								color: '5DFF9F',
							},
							{
								icon: Calendar,
								title: 'Natural Language Scheduling',
								description:
									'"Schedule coffee with Sarah next Tuesday at 3pm" — works with Google, Outlook, Apple.',
								color: '5DFF9F',
							},
							{
								icon: Phone,
								title: 'Contact-Aware',
								description:
									'Uses contact names from your phone — no need to explain who people are.',
								color: 'A07CFE',
							},
							{
								icon: Target,
								title: 'Follow-ups Handled For You',
								description:
									'Automatically follows up on commitments via WhatsApp — no more chasing people.',
								color: '5DFF9F',
							},
							{
								icon: MessageSquare,
								title: 'Just Talk — It Gets It',
								description:
									'Just speak naturally — Asmi understands context and intent from voice messages.',
								color: 'A07CFE',
							},
						].map((feature, index) => (
							<motion.div key={index} variants={itemVariants}>
								<Card className="glass-card hover-lift group h-full border-white/10">
									<CardContent className="space-y-6 p-8">
										<div
											className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
											style={{
												background: `rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.2)`,
												boxShadow: `0 0 20px rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.3)`,
											}}
										>
											<feature.icon
												className={`size-6`}
												style={{
													color: `#${feature.color}`,
												}}
											/>
										</div>
										<h3 className="text-xl font-semibold text-white transition-colors group-hover:text-white">
											{feature.title}
										</h3>
										<p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
											{feature.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Target Personas */}
			<section ref={personasRef} className="relative px-6 py-20">
				<div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/5 via-transparent to-[#5DFF9F]/5"></div>
				<div className="relative z-10 mx-auto max-w-7xl">
					<motion.div
						className="mb-16 text-center"
						variants={containerVariants}
						initial="hidden"
						animate={personasInView ? 'visible' : 'hidden'}
					>
						{/* Gradient divider line */}
						<motion.div
							className="w-15 mx-auto mb-3 h-0.5"
							style={{
								background:
									'linear-gradient(90deg, #A07CFE, #5DFF9F)',
								borderRadius: '2px',
							}}
							variants={itemVariants}
						/>

						<motion.h2
							className="mb-6 text-4xl font-semibold lg:text-5xl"
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
							Built for high-velocity operators
						</motion.h2>
					</motion.div>

					<motion.div
						className="grid gap-8 md:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						animate={personasInView ? 'visible' : 'hidden'}
					>
						{[
							{
								emoji: '🧑‍🚀',
								title: 'Founders',
								quote: 'I voice-note investor updates at midnight. Asmi turns them into follow-ups, summaries, and calendar events — before I forget.',
								features: [
									'Remember every investor conversation',
									'Never miss a follow-up',
									'Prep for every meeting',
								],
							},
							{
								emoji: '🧑‍💼',
								title: 'Startup Teams',
								quote: 'No more chasing teammates. I just say it once. Asmi tracks it, reminds them, and gives me updates before standup.',
								features: [
									'Coordinate without context-switching',
									'Automate status updates',
									'Never drop commitments',
								],
							},
							{
								emoji: '💸',
								title: 'VCs & Angels',
								quote: "I don't prep decks for calls anymore. Asmi gives me the founder's context, last chat, and deal notes in WhatsApp — right before we speak.",
								features: [
									'Track every founder interaction',
									'Remember deal terms and updates',
									'Perfect intro preparation',
								],
							},
						].map((persona, index) => (
							<motion.div key={index} variants={itemVariants}>
								<Card className="glass-card-dark hover-lift group h-full border-[#5DFF9F]/20">
									<CardContent className="space-y-4 p-8">
										<div className="mb-4 text-4xl">
											{persona.emoji}
										</div>
										<h3 className="text-2xl font-bold text-white">
											{persona.title}
										</h3>
										<p className="mb-4 italic text-slate-300">
											"{persona.quote}"
										</p>
										<ul className="space-y-2 text-sm text-slate-300">
											{persona.features.map(
												(feature, i) => (
													<li key={i}>• {feature}</li>
												)
											)}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Social Proof */}
			<section ref={socialProofRef} className="px-6 py-20">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mb-16 text-center"
						variants={containerVariants}
						initial="hidden"
						animate={socialProofInView ? 'visible' : 'hidden'}
					>
						{/* Gradient divider line */}
						<motion.div
							className="w-15 mx-auto mb-3 h-0.5"
							style={{
								background:
									'linear-gradient(90deg, #A07CFE, #5DFF9F)',
								borderRadius: '2px',
							}}
							variants={itemVariants}
						/>

						<motion.h2
							className="mb-6 text-4xl font-semibold lg:text-5xl"
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
							What early users are saying
						</motion.h2>
					</motion.div>

					<motion.div
						className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						animate={socialProofInView ? 'visible' : 'hidden'}
					>
						<motion.div variants={itemVariants}>
							<Card className="hover-lift border-slate-700 bg-slate-800/50">
								<CardContent className="p-6">
									<blockquote className="mb-4 text-slate-300">
										"Feels like I hired an EA and never had
										to explain anything."
									</blockquote>
									<div className="text-sm text-slate-400">
										— Founder, Series B SaaS
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Card className="hover-lift border-slate-700 bg-slate-800/50">
								<CardContent className="p-6">
									<blockquote className="mb-4 text-slate-300">
										"Finally, an AI that actually
										understands the context of fast-moving
										conversations."
									</blockquote>
									<div className="text-sm text-slate-400">
										— VP Growth, Unicorn Startup
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Card className="hover-lift border-slate-700 bg-slate-800/50">
								<CardContent className="p-6">
									<blockquote className="mb-4 text-slate-300">
										"I can't believe how much mental
										overhead this removes. Game changer."
									</blockquote>
									<div className="text-sm text-slate-400">
										— Partner, Tier 1 VC
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works */}
			<section ref={howItWorksRef} className="relative px-6 py-32">
				{/* <div className="absolute inset-0">
					<div className="bg-[#A07CFE]/3 animate-particle-float absolute right-1/4 top-1/4 size-96 rounded-full blur-3xl"></div>
					<div
						className="bg-[#5DFF9F]/3 animate-particle-float absolute bottom-1/4 left-1/4 size-96 rounded-full blur-3xl"
						style={{ animationDelay: '2s' }}
					></div>
				</div> */}

				<div className="relative z-10 mx-auto max-w-7xl">
					<motion.div
						className="mb-20 text-center"
						variants={containerVariants}
						initial="hidden"
						animate={howItWorksInView ? 'visible' : 'hidden'}
					>
						<motion.h2
							className="gradient-text-white mb-6 text-4xl font-bold lg:text-6xl"
							variants={itemVariants}
						>
							How Asmi works
						</motion.h2>
						<motion.p
							className="text-2xl font-light text-gray-400"
							variants={itemVariants}
						>
							Three steps. Zero effort. High leverage.
						</motion.p>
					</motion.div>

					<motion.div
						className="grid gap-16 md:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						animate={howItWorksInView ? 'visible' : 'hidden'}
					>
						{[
							{
								number: '1',
								title: 'Say it',
								description:
									'Voice note or text Asmi inside WhatsApp — no commands, just talk naturally.',
								examples: [
									'"Remind me to follow up with Tony on pricing."',
									'"Schedule intro call with Alex next Tuesday at 3PM."',
								],
							},
							{
								number: '2',
								title: 'It remembers',
								description:
									'Asmi understands what matters, connects it to past context, and tracks it.',
								examples: [
									'• Remembers convos, decisions, promises — no manual entry needed',
									'• Builds your contextual memory graph across meetings & messages',
								],
							},
							{
								number: '3',
								title: 'You stay sharp',
								description:
									'Asmi handles the rest — scheduling, briefing, nudging, reminding — before you even ask.',
								examples: [
									'• Prepares talking points before your next call',
									'• Follows up with your team or investors',
									'• Sends gentle nudges automatically in WhatsApp',
								],
							},
						].map((step, index) => (
							<motion.div
								key={index}
								className="group space-y-8 text-center"
								variants={itemVariants}
							>
								<motion.div
									className="glass-card hover-glow mx-auto flex size-20 items-center justify-center rounded-full border border-[#5DFF9F]/10"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.3 }}
								>
									<span className="gradient-text-primary text-3xl font-bold">
										{step.number}
									</span>
								</motion.div>
								<motion.h3
									className="text-3xl font-semibold text-white"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									{step.title}
								</motion.h3>
								<p className="text-lg leading-relaxed text-gray-400">
									{step.description}
								</p>
								<div className="glass-card space-y-3 rounded-2xl border border-[#5DFF9F]/10 p-6 text-left transition-colors duration-300 group-hover:border-[#5DFF9F]/20">
									{step.examples.map((example, i) => (
										<div
											key={i}
											className="data-display text-sm leading-relaxed text-gray-300"
										>
											{example}
										</div>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Example Output Visual */}
					<motion.div
						className="mx-auto mt-20 max-w-md"
						initial={{ opacity: 0, y: 50 }}
						animate={
							howItWorksInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 50 }
						}
						transition={{ delay: 0.8, duration: 0.8 }}
					>
						<div className="glass-card hover-lift neon-glow rounded-3xl border border-[#5DFF9F]/20 p-8">
							<div className="space-y-4 text-white">
								<div className="flex items-start gap-3">
									<Brain className="mt-0.5 size-5 shrink-0 text-[#A07CFE]" />
									<span className="data-display text-lg">
										Your call with Alex is prepped.
									</span>
								</div>
								<div className="flex items-start gap-3">
									<span className="text-lg text-[#5DFF9F]">
										💼
									</span>
									<span className="data-display">
										Series A, $50M ARR
									</span>
								</div>
								<div className="flex items-start gap-3">
									<MessageSquare className="mt-0.5 size-5 shrink-0 text-[#5DFF9F]" />
									<span className="data-display">
										Last chat: Pricing concerns
									</span>
								</div>
								<div className="flex items-start gap-3">
									<Target className="mt-0.5 size-5 shrink-0 text-[#5DFF9F]" />
									<span className="data-display">
										Talk about: Expansion plan, next steps
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Final CTA */}
			<section ref={finalCtaRef} className="relative px-6 py-32">
				<div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/10 to-[#5DFF9F]/10"></div>
				<div className="relative z-10 mx-auto max-w-4xl text-center">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={finalCtaInView ? 'visible' : 'hidden'}
					>
						<motion.div className="mb-4" variants={itemVariants}>
							<Badge className="animate-glow-pulse border-[#5DFF9F]/30 bg-[#5DFF9F]/20 text-[#5DFF9F]">
								<span className="animate-typing-cursor">
									🔥
								</span>{' '}
								Only 100 spots left
							</Badge>
						</motion.div>

						<motion.h2
							className="mb-8 text-5xl font-bold leading-tight text-white lg:text-6xl"
							variants={itemVariants}
						>
							We're onboarding 100 people who move{' '}
							<span className="gradient-text-primary">
								faster than their calendar.
							</span>
						</motion.h2>

						<motion.p
							className="mb-12 text-xl leading-relaxed text-gray-300"
							variants={itemVariants}
						>
							Join the beta and get your AI Chief of Staff inside
							<Slider
								data={['WhatsApp.', 'iMessage.']}
								className="ml-2 font-medium "
							/>
						</motion.p>
						<HeroForm
							className="mx-auto max-w-md space-y-6"
							containerClasses="flex-col"
							inputClasses="glass-card h-14 w-full border-[#5DFF9F]/20 text-lg text-white placeholder:text-gray-400 !w-full"
							btnClasses="hover-glow h-14 w-full bg-white text-lg font-semibold text-black transition-all duration-300 hover:bg-[#5DFF9F] hover:text-black"
						/>
						<motion.p
							className="mt-6 text-sm text-gray-400"
							variants={itemVariants}
						>
							No credit card required. Early access closes
							December 15th.
						</motion.p>
					</motion.div>
				</div>
			</section>
			<NewFooter />
		</div>
	);
};

export default Index;
