import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

import { Button } from '../../../ui/button';

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden px-4 py-10 md:py-12">
			<div className="container mx-auto">
				<div className="flex flex-col items-center md:flex-row">
					<div className="animate-fade-in mb-12 md:mb-0 md:w-1/2">
						<h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
							The AI That Truly{' '}
							<span className="text-asmi-600">Knows You</span>
						</h1>
						<p className="mb-8 max-w-lg text-xl text-gray-600">
							Asmi is an always-on, voice-first AI OS that
							passively listens, understands your context, and
							becomes your personal command center for life.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row">
							<Button className="bg-asmi-600 hover:bg-asmi-700 flex items-center rounded-lg px-8 py-6 text-lg text-white">
								Try Asmi Free
								<ArrowRight className="ml-2 size-5" />
							</Button>
							<Button
								variant="outline"
								className="border-asmi-300 text-asmi-700 hover:bg-asmi-50 flex items-center rounded-lg px-8 py-6 text-lg"
							>
								<Play className="mr-2 size-5" />
								Watch Demo
							</Button>
						</div>
					</div>

					<div className="animate-fade-in relative md:w-1/2">
						<div className="relative z-10">
							<div className="from-asmi-200 to-asmi-400 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br shadow-xl md:h-[500px]">
								<img
									src="/lovable-uploads/4c6f6ac8-4db3-4875-9bf5-755889b0266b.png"
									alt="Asmi AI Interface"
									className="animate-float h-auto w-3/4 object-contain"
								/>
							</div>
						</div>
						<div className="bg-asmi-300 absolute -bottom-20 -right-20 size-64 rounded-full opacity-20 blur-3xl"></div>
						<div className="bg-asmi-400 absolute -left-20 -top-20 size-72 rounded-full opacity-20 blur-3xl"></div>
					</div>
				</div>
			</div>

			{/* Background elements */}
			<div className="bg-asmi-100 absolute right-0 top-1/4 size-64 rounded-full opacity-30 blur-3xl"></div>
			<div className="bg-asmi-200 absolute bottom-0 left-1/4 size-72 rounded-full opacity-30 blur-3xl"></div>
		</section>
	);
};

export default HeroSection;
