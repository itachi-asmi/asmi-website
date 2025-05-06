import React, { type ComponentType } from 'react';
import { Brain, Mic, PlayCircle } from 'lucide-react';

const Step = ({
	number,
	title,
	description,
	icon: Icon,
}: {
	number: number;
	title: string;
	description: string;
	icon: ComponentType<{ className?: string; size?: number }>;
}) => {
	return (
		<div className="mb-12 flex flex-col items-center text-center md:mb-0 md:items-start md:text-left">
			<div className="relative mb-6">
				<div className="bg-asmi-100 flex size-16 items-center justify-center rounded-full">
					<Icon className="text-asmi-600" size={28} />
				</div>
				<div className="bg-asmi-600 absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full font-bold text-white">
					{number}
				</div>
			</div>
			<h3 className="mb-2 text-xl font-semibold text-gray-900">
				{title}
			</h3>
			<p className="max-w-xs text-gray-600">{description}</p>
		</div>
	);
};

const HowItWorksSection = () => {
	const steps = [
		{
			number: 1,
			title: 'Capture',
			description:
				'Asmi passively listens to your voice, calendar, and habits.',
			icon: Mic,
		},
		{
			number: 2,
			title: 'Understand',
			description:
				'It learns your context—mood, preferences, priorities.',
			icon: Brain,
		},
		{
			number: 3,
			title: 'Act',
			description:
				'Suggests what to do, when to do it, and helps you get it done.',
			icon: PlayCircle,
		},
	];

	return (
		<section
			id="how-it-works"
			className="relative overflow-hidden px-4 py-20"
		>
			<div className="container relative z-10 mx-auto">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						How It Works
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">
						Asmi passively listens, understands your context, and
						creates intelligent & fun AI agents to manage life
						seamlessly.
					</p>
				</div>

				<div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-16 md:space-y-0">
					{steps.map((step, index) => (
						<Step
							key={index}
							number={step.number}
							title={step.title}
							description={step.description}
							icon={step.icon}
						/>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="bg-asmi-100 text-asmi-700 mb-4 inline-block rounded-full px-6 py-2 font-medium">
						No friction
					</div>
					<h3 className="mb-4 text-2xl font-bold text-gray-900">
						No typing. No toggling between apps. Just your voice.
					</h3>
					<p className="mx-auto max-w-2xl text-gray-600">
						Asmi is designed to be always available but never in the
						way. It&apos;s the first AI that truly integrates with
						your life.
					</p>
				</div>
			</div>

			{/* Background elements */}
			<div className="absolute left-0 top-20 size-64 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
			<div className="absolute bottom-20 right-0 size-96 rounded-full bg-purple-200 opacity-30 blur-3xl"></div>
		</section>
	);
};

export default HowItWorksSection;
