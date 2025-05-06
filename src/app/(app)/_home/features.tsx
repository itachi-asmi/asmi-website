import React, { type ComponentType } from 'react';
import { Calendar, Check, Heart, MessageSquare, Settings } from 'lucide-react';

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
			title: 'Chief of Staff',
			description:
				'Plans your day, prepares you for meetings, takes notes, plans travel, pays bills.',
			icon: Settings,
		},
		{
			title: 'Wellness Coach',
			description:
				'Creates plans based on your daily schedule, pushes you to follow through, tracks your progress.',
			icon: Heart,
		},
		{
			title: 'Entertainment Curator',
			description:
				'Suggests shows, food, and travel based on your mood and preferences.',
			icon: MessageSquare,
		},
		{
			title: 'Memory Keeper',
			description:
				'Recalls what matters—from a thought you had in the car to a gift idea from last week.',
			icon: Calendar,
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
								All working together seamlessly
							</h3>
							<p className="text-lg text-white/80">
								Asmi integrates every aspect of your life,
								creating a personalized experience that just
								works. No typing. No toggling between apps. Just
								your voice.
							</p>
						</div>
						<div className="flex justify-center md:w-1/4">
							<div className="flex size-24 items-center justify-center rounded-full bg-white">
								<Check size={48} className="text-asmi-600" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
