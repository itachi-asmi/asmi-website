import React, { type ComponentType } from 'react';
import { Brain, CalendarDays, ListTodo, MessageSquare } from 'lucide-react';

const FeatureCard = ({
	title,
	description,
	icon: Icon,
}: {
	title: string;
	description: string;
	icon: ComponentType<{ className?: string; size?: number }>;
}) => {
	return (
		<div className="hover:border-asmi-200 rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
			<div className="bg-asmi-100 mb-5 flex size-12 items-center justify-center rounded-lg">
				<Icon className="text-asmi-600" size={24} />
			</div>
			<h3 className="mb-3 text-xl font-semibold text-gray-900">
				{title}
			</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

const FeaturesSection = () => {
	const features = [
		{
			title: 'Daily Planner',
			description: `Sends your personalized "Today's Plan" every morning.`,
			icon: CalendarDays,
		},
		{
			title: 'To-Do Manager',
			description: 'Creates, tracks, and reminds you of your tasks.',
			icon: ListTodo,
		},
		{
			title: 'Memory Keeper',
			description:
				'Saves everything—texts, voice notes, ideas, links—and recalls instantly when you need.',
			icon: MessageSquare,
		},
		{
			title: 'Personal AI',
			description:
				'Ask anything. Gives answers tailored to your life, not just from internet.',
			icon: Brain,
		},
	];

	return (
		<section id="features" className="bg-gray-50 px-4 py-20">
			<div className="container mx-auto">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						What Asmi Can Do For You
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">
						Your Smartest Life Companion
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							title={feature.title}
							description={feature.description}
							icon={feature.icon}
						/>
					))}
				</div>

				<div className="from-asmi-500 to-asmi-700 mx-auto mt-16 max-w-5xl rounded-2xl bg-gradient-to-r p-8 shadow-lg md:p-12">
					<div className="flex flex-col items-center md:flex-row">
						<div className="mb-8 md:mb-0 md:mr-8 md:w-3/4">
							<h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
								All over WhatsApp. All personalized just for
								you.
							</h3>
							<p className="text-lg text-white/80">
								Asmi integrates every aspect of your life right
								where your conversations already happen. No new
								app. No learning curve. Just your WhatsApp.
							</p>
						</div>
						<div className="flex justify-center md:w-1/4">
							<img
								src="/images/0f7e42be-2cd4-4219-98a2-1a0e289a9383.png"
								alt="Asmi on WhatsApp"
								className="size-24 rounded-full bg-white object-contain p-2"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
